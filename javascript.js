var disneyMovies = [];

// Function for displaying movie buttons
function renderButtons() {
    $("#buttons-div").empty();

    for (var i = 0; i < disneyMovies.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("movie");
        newBtn.attr("movie-name", disneyMovies[i]);
        newBtn.text(disneyMovies[i]);
        $("#buttons-div").append(newBtn);
    };
};

// Function for adding movies to the array
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    var movie = $("#user-input").val().trim();
    disneyMovies.push(movie);
    renderButtons();
});