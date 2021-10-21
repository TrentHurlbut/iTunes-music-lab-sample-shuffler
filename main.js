//VARIABLE DECLARATIONS
//All of the variables referred to are the elements involved in searching for music and playing them.
const resultsField = document.getElementById('results-field');
const searchButton = document.getElementById('search');
const playBox = document.getElementById('play-box');
const audioControls = document.getElementById('audio-station');
const playButton = document.getElementById('play-button');
const searchParameter = document.getElementById('music-menu');

//One event listener which populates the page after the 'Let's Go!' button is clicked or enter is pressed.
document.getElementById('discovery-form').addEventListener(
    'submit',
    (e) => {
        //This prevents the page from refreshing on submission.
        e.preventDefault();

        //Clears the audio sample upon submit, if there is one.
        playBox.innerHTML = '';

        //A variable declaration capturing information in the search field.
        let selectorText = document.getElementById('discovery-text').value;

        //This will fire when the user selects song as the media form they would like to receive back.
        if (searchParameter.value === 'song') {
            //Using try-catch in case any responses generate an error.
            try {
                //This request is made based on what the user searches and returns songs.
                fetch(
                    `https://itunes.apple.com/search?media=music&entity=song&term=${selectorText}`
                )
                    .then((response) =>
                        //This checks to see if the response is within the 200 range. If it is not, the user is alerted to the status received from the request.
                        response.ok
                            ? response.json()
                            : alert(response.statusText)
                    )
                    .then((data) => {
                        let musicArr = data.results;
                        if (musicArr <= 0) {
                            alert('Your search returned no results!');
                        } else {
                            //16 randomly generated song cards are populated on the DOM if there is currently none displayed.
                            if (resultsField.innerHTML === '') {
                                //Occasionally results won't load and will throw a 404 error, this try-catches with a notification to the user.
                                try {
                                    for (let i = 0; i < 16; i++) {
                                        let selector = Math.floor(
                                            Math.random() * 50
                                        );
                                        resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'><strong>Artist: </strong>${musicArr[selector].artistName} </br> <strong>Album: </strong>${musicArr[selector].collectionName}</p>
                            <h3>${musicArr[selector].trackName}</h3>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                                    }
                                } catch (error) {
                                    confirm(
                                        'One or more elements failed to load.'
                                    );
                                }
                            } else {
                                //If there are already songs, the DOM resets the innerHTML of the 'resultsField' and repopulates.
                                resultsField.innerHTML = '';
                                try {
                                    for (let i = 0; i < 16; i++) {
                                        let selector = Math.floor(
                                            Math.random() * 50
                                        );
                                        resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'><strong>Artist: </strong>${musicArr[selector].artistName} </br> <strong>Album: </strong>${musicArr[selector].collectionName}</p>
                            <h3>${musicArr[selector].trackName}</h3>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                                    }
                                } catch (error) {
                                    confirm(
                                        'One or more elements failed to load.'
                                    );
                                }
                            }
                        }
                    });
            } catch (error) {
                alert("Your search didn't work! Try again.");
            }
            //This is the music video fetch request. Functions similarly to the songs request above, but returns videos.
        } else if (searchParameter.value === 'music-video') {
            try {
                fetch(
                    `https://itunes.apple.com/search?media=musicVideo&entity=musicVideo&term=${selectorText}`
                )
                    .then((response) =>
                        response.ok
                            ? response.json()
                            : alert(response.statusText)
                    )
                    .then((data) => {
                        let musicArr = data.results;
                        if (resultsField.innerHTML === '') {
                            try {
                                for (let i = 0; i < 4; i++) {
                                    let selector = Math.floor(
                                        Math.random() * musicArr.length
                                    );
                                    resultsField.innerHTML += `
                                <div class="video">
                                <video controls src='${musicArr[selector].previewUrl}'></video>
                                <h4 class'video-info'>Artist: ${musicArr[selector].artistName}</h4>
                                <h4 class'video-info'>Track: ${musicArr[selector].trackName}</h4>
                                </div>
                            `;
                                }
                            } catch (error) {
                                confirm('One or more elements failed to load.');
                            }
                        } else {
                            resultsField.innerHTML = '';
                            try {
                                for (let i = 0; i < 4; i++) {
                                    let selector = Math.floor(
                                        Math.random() * musicArr.length
                                    );
                                    resultsField.innerHTML += `
                                <div class="video">
                                <video controls src='${musicArr[selector].previewUrl}'></video>
                                <h4 class'video-info'>Artist: ${musicArr[selector].artistName}</h4>
                                <h4 class'video-info'>Track: ${musicArr[selector].trackName}</h4>
                                </div>
                            `;
                                }
                            } catch (error) {
                                confirm('One or more elements failed to load.');
                            }
                        }
                    });
            } catch (error) {
                alert("Your search didn't work! Try again.");
            }
        }
    },
    false
);

//This allows the user to play a song sample based on which play button they select in the populated resultsField when songs are returned.
resultsField.addEventListener('click', (e) => {
    playBox.innerHTML = `<audio id="audio-station" src='${e.target.value}' controls autoplay>Audio elements are not supported by your browser.</audio>`;
});
