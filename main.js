const resultsField = document.getElementById('results-field');

const searchButton = document.getElementById('search');

const playBox = document.getElementById('play-box');

searchButton.addEventListener('click', () => {
    let artistText = document.getElementById('discovery-text').value;

    fetch(
        `https://itunes.apple.com/search?media=music&entity=song&term=${artistText}`
    )
        .then((response) => response.json())
        .then((data) => {
            let musicArr = data.results;
            for (let i = 0; i < 16; i++) {
                resultsField.innerHTML += `
                <div class="artist-card">
                <img src=${musicArr[i].artworkUrl100}>
                <p class='song-info'>${musicArr[i].artistName}</p>
                <p class='song-info'>${musicArr[i].trackName}</p>
                <button class='play' id='${musicArr[i].trackId}' value='${musicArr[i].previewUrl}'>Play Me!</button>
                </div>
                `;
            }
        });
});

resultsField.addEventListener('click', (e) => {
    console.log(e.target.value);
    playBox.innerHTML = `
    <audio controls>
    <source src='${e.target.vlaue}'>
    Your browser does not support HTML audio tags.
    </audio>    
    `;
});
