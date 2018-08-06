var disneyMovies = ["Lion King", "The Little Mermaid", "Finding Nemo"];

// Function for displaying movie buttons
function renderButtons() {
    $("#buttons-div").empty();

    for (var i = 0; i < disneyMovies.length; i++) {
        var newBtn = $("<button class='movie'>");
        newBtn.attr("movie-name", disneyMovies[i]);
        newBtn.text(disneyMovies[i]);
        $("#buttons-div").append(newBtn);
    };
};

// Function for displaying GIFs
$(document.body).on("click", ".movie", function() {
    var movieName = $(this).attr("movie-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movieName + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }). then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gif = $("<img>");
            gif.attr("src", results[i].images.fixed_height.url);
            gifDiv.append(p);
            gifDiv.append(gif);
            $("#gifs-div").prepend(gifDiv);
        }
    })

});

// Function for adding movies to the array
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    var movie = $("#user-input").val().trim();
    disneyMovies.push(movie);
    renderButtons();
    $("#user-input").val("");
});

// Function for displaying the buttons that are already on the page
renderButtons();