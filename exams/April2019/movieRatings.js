function movieRatings(input) {

    let moviesQuantity = Number(input.shift());
    let movieName = input.shift();
    let sumRatings = 0;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let bestMovie;
    let worstMovie;

    for (let i = 1; i <= moviesQuantity; i++) {
        let currentMovieRating = Number(input.shift());
        sumRatings += currentMovieRating;
        if (currentMovieRating >= maxRating) {
            maxRating = currentMovieRating;
            bestMovie = movieName;
        }
        if (currentMovieRating <= minRating) {
            minRating = currentMovieRating;
            worstMovie = movieName;
        }
        movieName = input.shift();
    }
    let averageRating = sumRatings / moviesQuantity
    console.log(`${bestMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}
movieRatings(["1",
    "Interstellar",
    "8.5"
])