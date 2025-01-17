# iTunes Search

## Directions

For this app, we will request data from the iTunes API.

You'll use artist data from the API to display song titles, and then allow the user to select and play song previews. Here is an idea of what the [end result](musicapp.jpg) could look like, though you can customize the design however you like.

Here are the steps you'll need to take in order to complete this project.

1. Build a form that has an `<input>` where a user can type in the name of a band or an artist.
2. When the user types their search term and presses the submit button (or presses Enter), make the search request to the API.
3. When the API returns a response, use the results to display a listing of songs related to the search term.
4. When a user clicks a song in your listing, the song should play in an `<audio>` tag that you've also added to the page (see [the mockup](musicapp.jpg)).

## Product Requirements

-   A user can search for songs by artist or band name.
-   Validate the input so that a search request is not sent with no search term.
-   Display the search results without reloading the page.
-   The results should include song details. You must include the song title, but the data you'll get back from the API has other info you can consider including, like artist name, album title, album image, and release date.
-   The number of results you show is up to you. If no results are returned from a search, your UI should communicate this to the user in a clear way (how you do this is up to you).
-   You should handle responses from the server that are not in the 200 range in your javascript and also in your UI (for instance, you can show an error message and ask the user to repeat their search).
-   Allow the user to click on a song title to play a song preview.
-   Your application should be nicely styled, with thought given to the user experience (that is, it should be easy for your user to interact with).

### Setup with `npm`

You'll run a development server in this project using `live-server`. Be sure to `npm install` after cloning this repo. Then run `npm start` to run your server.

### Hints & Tips

There will be some new concepts you'll need to work through on this project, so don't hesitate to ask for assistance along the way.

-   [iTunes API documentation](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1)
    -   Read through the documentation before getting started. Everything you'll need to know is in there.
    -   Use Insomnia to make requests to the API to test out the URLs you will need to construct and see data that is returned.
-   Playing a song preview
    -   You'll need to research the `<audio>` tag for this part - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

**NOTE**: The iTunes API can be a little flaky when it comes to returning CORS headers. These headers are necessary for Ajax to work correctly. If you have any problems, you can use a proxy we've set up. Replace `https://itunes.apple.com/` in the API URL with `https://proxy-itunes-api.glitch.me/`.

One hard part will be getting the song to play. Since you will be dynamically generating the HTML for your results, adding an event listener to each result can be tricky. One way to make this easier is to put your `click` event listener on a parent node (like a `div` around the entire results section) and then get the item that the user click by getting the `event.target` in your event listener callback. This is called "event delegation"; here is a comprehensive [article on the technique](https://davidwalsh.name/event-delegate).

### 🌶️ Spicy Options

-   Add a radio button to switch the search between artist, song title, or album title.
-   Style your site so that it looks good on mobile screens as well as the desktop.
-   Create a way to toggle light/dark modes on your site. Allow your user to save their preferences by using [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).
-   Deploy your site using [GitHub Pages! 🚀](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/getting-started-with-github-pages)
    Publishing your project site using GitHub pages is pretty straightforward:

    -   Make sure you have an `index.html` file at the root of your project.
    -   Create a branch called `gh-pages` (this is the default publishing source for GitHub pages).
    -   Push your code to this branch (`git push origin gh-pages`).
    -   View your site at `https://<user>.github.io/<repository>` (replacing the bracketed values with your github username and repository name).
    -   ⚠️ NOTE: you will have to push your code to _both_ the `main` branch and `gh-pages` branch. For this reason, it will be easiest to deploy your site after you've pushed your final commit.

    -   Sample Object:
        { artistId: 284113
        artistName: "Mötley Crüe"
        artistViewUrl: "https://music.apple.com/us/artist/m%C3%B6tley-cr%C3%BCe/284113?uo=4"
        artworkUrl30: "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1b/50/01/1b5001a5-3db8-2127-99d1-4874cd02cd34/source/30x30bb.jpg"
        artworkUrl60: "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1b/50/01/1b5001a5-3db8-2127-99d1-4874cd02cd34/source/60x60bb.jpg"
        artworkUrl100: "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/1b/50/01/1b5001a5-3db8-2127-99d1-4874cd02cd34/source/100x100bb.jpg"
        collectionCensoredName: "Dr. Feelgood (Deluxe Version)"
        collectionExplicitness: "notExplicit"
        collectionId: 1242687530
        collectionName: "Dr. Feelgood (Deluxe Version)"
        collectionPrice: 9.99
        collectionViewUrl: "https://music.apple.com/us/album/kickstart-my-heart/1242687530?i=1242687820&uo=4"
        country: "USA"
        currency: "USD"
        discCount: 1
        discNumber: 1
        isStreamable: true
        kind: "song"
        previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b4/26/96/b426965c-2028-ecf8-c0bc-903321d3eebf/mzaf_15194805867805608924.plus.aac.p.m4a"
        primaryGenreName: "Hard Rock"
        releaseDate: "1989-09-01T12:00:00Z"
        trackCensoredName: "Kickstart My Heart"
        trackCount: 16
        trackExplicitness: "notExplicit"
        trackId: 1242687820
        trackName: "Kickstart My Heart"
        trackNumber: 5
        trackPrice: 1.29
        trackTimeMillis: 282653
        trackViewUrl: "https://music.apple.com/us/album/kickstart-my-heart/1242687530?i=1242687820&uo=4"
        wrapperType: "track"
        [[Prototype]]: Object} 
