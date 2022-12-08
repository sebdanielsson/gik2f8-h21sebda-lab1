'use strict';

showLoading();

// Load bookList on page load and call getURLQuery
let bookList = [];
window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks) && getURLQuery());
});

// Show loading spinner
function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

// Hide loading spinner
function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

// Get search query from URL
function getURLQuery() {
    hideLoading();
    const urlParams = new URLSearchParams(window.location.search);
    let searchTerm = urlParams.get('q');
    searchField.value = searchTerm;
    filterResults(searchTerm);
}

// Put search query in URL
function setURLQuery(searchTerm) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('q', searchTerm);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
}

// Capture search input
searchField.oninput = function(e) {
    filterResults(e.target.value), setURLQuery(e.target.value);
};

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

// Render details
async function renderDetails(e) {
    let bookId = e.target.id.split('book_')[1];
    let item = await getItem(bookId);
    
    if (!document.getElementById('book_details')) {
        document.body.insertAdjacentHTML('beforeend',RenderDetailsHTML(item));
    } else {
        removeDetails()
        document.body.insertAdjacentHTML('afterbegin',RenderDetailsHTML(item));
    }
    updatePos();
}

// Position details
function updatePos() {
    const item = document.getElementById('book_details');
    window.addEventListener("mousemove", (e) => {
        if (item) {
            item.style.top = e.pageY + "px";
            item.style.left = e.pageX + "px";
            item.style.transform = "translate(-50%, -110%)";
            item.style.display = "flex";
        }
    });

    window.addEventListener("ontouchstart", (e) => {
        if (item) {
            item.style.top = e.pageY + "px";
            item.style.left = e.pageX + "px";
            item.style.transform = "translate(-50%, -110%)";
            item.style.display = "flex";
        }
    });
}

// Remove details
function removeDetails() {
    const book_details_list = document.querySelectorAll('.book-details');

    book_details_list.forEach(item => {
    item.remove();
    });
}