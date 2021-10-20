const resultsField = document.getElementById('results-field');

const searchButton = document.getElementById('search');

const playBox = document.getElementById('play-box');

const audioControls = document.getElementById('audio-station');

const playButton = document.getElementById('play-button');

const searchParameter = document.getElementById('music-menu');

console.log(searchParameter.value);

document.getElementById('discovery-form').addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

        let selectorText = document.getElementById('discovery-text').value;
        if (searchParameter.value === 'artist') {
            try {
                fetch(
                    `https://itunes.apple.com/search?media=music&entity=song&term=${selectorText}`
                )
                    .then((response) =>
                        response.ok
                            ? response.json()
                            : alert(response.statusText)
                    )
                    .then((data) => {
                        let musicArr = data.results;
                        if (resultsField.innerHTML === '') {
                            for (let i = 0; i < 16; i++) {
                                let selector = Math.floor(Math.random() * 50);
                                resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'>${musicArr[selector].artistName} </br> ${musicArr[selector].collectionName} </br> ${musicArr[selector].trackName}</p>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                            }
                        } else {
                            resultsField.innerHTML = '';
                            for (let i = 0; i < 16; i++) {
                                let selector = Math.floor(Math.random() * 50);
                                resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'>${musicArr[selector].artistName} </br> ${musicArr[selector].trackName}</p>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                            }
                        }
                    });
            } catch (error) {
                alert("Your search didn't work! Try again.");
            }
        } else if (searchParameter.value === 'song') {
            try {
                fetch(
                    `https://itunes.apple.com/search?media=music&entity=song&term=${selectorText}`
                )
                    .then((response) =>
                        response.ok
                            ? response.json()
                            : alert(response.statusText)
                    )
                    .then((data) => {
                        let musicArr = data.results;
                        if (resultsField.innerHTML === '') {
                            for (let i = 0; i < 16; i++) {
                                let selector = Math.floor(Math.random() * 50);
                                resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'>${musicArr[selector].artistName} </br> ${musicArr[selector].collectionName} </br> ${musicArr[selector].trackName}</p>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                            }
                        } else {
                            resultsField.innerHTML = '';
                            for (let i = 0; i < 16; i++) {
                                let selector = Math.floor(Math.random() * 50);
                                resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'>${musicArr[selector].artistName} </br> ${musicArr[selector].trackName}</p>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                            }
                        }
                    });
            } catch (error) {
                alert("Your search didn't work! Try again.");
            }
        } else if (searchParameter.value === 'album') {
            try {
                fetch(
                    `https://itunes.apple.com/search?media=music&entity=song&term=${selectorText}`
                )
                    .then((response) =>
                        response.ok
                            ? response.json()
                            : alert(response.statusText)
                    )
                    .then((data) => {
                        let musicArr = data.results;
                        if (resultsField.innerHTML === '') {
                            for (let i = 0; i < 16; i++) {
                                let selector = Math.floor(Math.random() * 50);
                                resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'>${musicArr[selector].artistName} </br> ${musicArr[selector].collectionName} </br> ${musicArr[selector].trackName}</p>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
                            }
                        } else {
                            resultsField.innerHTML = '';
                            for (let i = 0; i < 16; i++) {
                                let selector = Math.floor(Math.random() * 50);
                                resultsField.innerHTML += `
                            <div class="artist card">
                            <img src=${musicArr[selector].artworkUrl100}>
                            <p class='song-info'>${musicArr[selector].artistName} </br> ${musicArr[selector].trackName}</p>
                            <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                            </div>
                            `;
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

resultsField.addEventListener('click', (e) => {
    console.log(e.target.value);
    playBox.innerHTML = `<audio id="audio-station" src='${e.target.value}' controls autoplay></audio>`;
});
