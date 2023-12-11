
const apiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=9fdd5f05'; 

async function getMovieData(title) {
    try {
        const response = await fetch(`${apiUrl}&t=${title}`);
        if (!response.ok) {
            throw new Error('Movie not found!');
        }
        const data = await response.json();
        displayMovieData(data);
    } catch (error) {
        console.error(error.message);
        displayMovieDataError();
    }
}

function displayMovieDataError() {
    const movieContainer = document.getElementById('movieContainer');
    movieContainer.innerHTML = '<p>Error: Movie not found!</p>';
}

function displayMovieData(movie) {
    const movieContainer = document.getElementById('movieContainer');
    
    // Use the map method to format genres as a string
    const formattedGenres = movie.Genre.split(',').map(genre => genre.trim()).join(', ');

    movieContainer.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
        <p>${movie.Plot}</p>
        <p>Year: ${movie.Year}</p>
        <p>Genre: ${formattedGenres}</p>
        <p>Director: ${movie.Director}</p>
        <p>IMDb Rating: ${movie.imdbRating}</p>
    `;
}

// Event Listener
document.getElementById('searchButton').addEventListener('click', function () {
    const movieTitle = document.getElementById('movieTitle').value;
    if (movieTitle.trim() !== '') {
        getMovieData(movieTitle);
    }
});
