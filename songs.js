$(document).ready(function() {
    // Use jQuery to get a reference to `load-songs`
    $("#load-songs")
    // Use jQuery to get a reference to `song-list`
    $("#song-list")
    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    $("#load-songs").click(() => {
        $.ajax("http://127.0.0.1:8080/songs.json")
    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
        .then(feedback => {
            console.log(feedback);
            $("<section>")
            .addClass("song");
            $("#song-list").append($("<section>.song"))
            feedback.songs.forEach(element => {
                console.log(element);
                console.log(songSection);
                    $("<h1>")
                    .addClass("song_title")
                    .text(element.title)
                    $("<section>").append($("<h4>"))

                    $("<section>")
                    .addClass("song_description")
                    .text(`Performed by ${element.artist} on the album ${element.album}`)
                    $("<section>.song").append($("<section>.song_description"))
            });
        })
    })
})