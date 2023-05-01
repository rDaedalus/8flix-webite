// ticket.js
const API_KEY = 'api_key=cf3d337a81bfc78192cfe4b03d61aae9';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const movieInfo = document.getElementById('movie-info');
const purchaseForm = document.getElementById('purchase-form');

// Retrieve movie ID from query parameter
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Fetch movie details from API
fetch(`${BASE_URL}/movie/${movieId}?${API_KEY}`).then(res => res.json()).then(movie => {
    // Display movie details
    const { title, poster_path, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.innerHTML = `
        <h2>${title}</h2>
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <p>${overview}</p>
    `;
    movieInfo.appendChild(movieEl);
});

// Handle form submission
purchaseForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;

    // TODO: Handle ticket purchase using name, email, quantity, and movie ID
});