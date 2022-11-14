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
    let resultsHTML = '';
    for (let i=0; i<searchResults.length; i++) {
        resultsHTML += `
            <li class="p-4 rounded-lg dark:hover:bg-gray-600">
                <h2 class="text-xl">${searchResults[i].title}</h2>
                <span class="text-base">${searchResults[i].author} · ${searchResults[i].year}</span>
            </li>
        `;
    }
    const results = document.getElementById('results');
    results.innerHTML = resultsHTML;
}