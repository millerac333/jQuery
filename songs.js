$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    let $loadSongsList = $("#load-songs")
    .text("LOAD SONG LIST")

    // Use jQuery to get a reference to `song-list`
    let $songList = $("#song-list")
    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    $loadSongsList.click(() => {
        $.ajax("songs.json")
        .then(feedback => {
            console.log(feedback);

            let $songSection = $("<section>")
            $songSection.addClass("songs");
            $songList.append($songSection)

            feedback.songs.forEach(element => {
                console.log(element);
                console.log($songSection);

                let $songHeader = $("<h1>")
                $songHeader.addClass("song_title")
                .text(element.title)
                $songSection.append($songHeader)

                let $descriptionSection = $("<section>")
                $descriptionSection.addClass("song_description")
                .text(`Performed by ${element.artist} on the album ${element.album}`)
                $songSection.append($descriptionSection)
            });
        })
    })
})