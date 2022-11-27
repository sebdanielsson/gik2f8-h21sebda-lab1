'use strict';

// Load bookList on page load and call getURLQuery
let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks) && getURLQuery());
});

function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

// Search on input
searchField.oninput = function(e) {filterResults(e.target.value)};

// Get URL search query
function getURLQuery() {
    hideLoading();
    let searchTerm = '';
    if (window.location.search.includes('searchQuery=')) {
        searchTerm = decodeURI(window.location.search.replace("?searchQuery=", ""));
        searchField.value = searchTerm;
        filterResults(searchTerm);
    }
}

// Filter results
function filterResults(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    const searchResults = bookList.filter(({ title, author, releaseDate }) => {
        if (searchTerm.length > 0) {
            return (
                title.toLowerCase().includes(searchTerm) ||
                author.toLowerCase().includes(searchTerm) ||
                releaseDate.includes(searchTerm)
            );
        }
    });
    renderResults(searchResults);
}

// Render results
function renderResults(searchResults) {
    bookList.length > 0 && searchResults.value
        results.innerHTML = RenderResultsHTML(searchResults);
}