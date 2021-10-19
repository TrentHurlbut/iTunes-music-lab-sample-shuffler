const resultsField = document.getElementById('results-field');

const searchButton = document.getElementById('search');

const playBox = document.getElementById('play-box');

const audioControls = document.getElementById('audio-station');

const sourceAudio = audioControls.childNodes[0].nextElementSibling;

const playButton = document.getElementById('play-button');

searchButton.addEventListener('click', () => {
    let artistText = document.getElementById('discovery-text').value;

    fetch(
        `https://itunes.apple.com/search?media=music&entity=song&term=${artistText}`
    )
        .then((response) => response.json())
        .then((data) => {
            let musicArr = data.results;
            for (let i = 0; i < 16; i++) {
                let selector = Math.floor(Math.random() * 50);
                resultsField.innerHTML += `
                <div class="artist-card">
                <img src=${musicArr[selector].artworkUrl100}>
                <p class='song-info'>${musicArr[selector].artistName}</p>
                <p class='song-info'>${musicArr[selector].trackName}</p>
                <button class='play' id='${musicArr[selector].trackId}' value='${musicArr[selector].previewUrl}'>Play Me!</button>
                </div>
                `;
            }
        });
});

resultsField.addEventListener('click', (e) => {
    console.log(e.target.value);
    audioControls.src = e.target.value;
    audioControls.autoPlay = true;
});
