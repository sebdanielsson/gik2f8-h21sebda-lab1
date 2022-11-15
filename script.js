'use strict';

const bookList = [
    {
    id: 1,
    author: 'Charles Dickens',
    title: 'Oliver Twist',
    year: '1837'
    },
    {
    id: 2,
    author: 'William Shakespeare',
    title: 'Hamlet',
    year: '1603'
    }
];

const searchField = document.getElementById('searchField');
searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
    searchBooks(e.target.value);
}

function searchBooks(searchTerm) {
    const filteredList = [];
    for (let i=0; i<bookList.length; i++) {
        const title = bookList[i].title.toLowerCase();
        
        if (title.indexOf(searchTerm.toLowerCase()) >=0 && searchTerm !== '') {
            filteredList.push(bookList[i]);
        }
    }
    renderResults(filteredList);
}

function renderResults(searchResults) {
    const results = document.getElementById('results');
    results.innerHTML = RenderResultsHTML(searchResults);
}