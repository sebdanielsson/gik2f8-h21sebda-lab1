'use strict';

// Load bookList on page load
let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

// Fill search bar with query string -- NOT SHOWING RESULTS BUT FILLING IN TEXTFIELD -- WHY?
window.addEventListener('load', () => {
    if (window.location.search.includes('searchQuery=')) {
        const searchQuery = decodeURI(window.location.search.replace("?searchQuery=", ""));
        document.getElementById("searchField").value = searchQuery;
        filterResults(searchQuery);
    }
});

// Search on input
document.getElementById("searchField").oninput = function(e) {filterResults(e.target.value)};

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