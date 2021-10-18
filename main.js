const resultsField = document.getElementById('results-field');

const searchButton = document.getElementById('search');

searchButton.addEventListener('click', () => {
    let artistText = document.getElementById('discovery-text').value;

    fetch(
        `https://itunes.apple.com/search?media=music&entity=song&term=${artistText}`
    )
        .then((response) => response.json())
        .then((data) => {
            let musicArr = data.results;
            let i = 0;
            for (let entry of musicArr) {
                while (i <= 15) {
                    console.log(entry);
                    console.log(i);
                    i++;
                }
            }
        });
});

// for(let entry of data){
//     resultsField.innerHTML = `
//     <div class="artist-card">
//     <img src=
//     `
