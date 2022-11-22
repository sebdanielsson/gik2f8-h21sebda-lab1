const RenderResultsHTML = (searchResults) => {
    let resultsHTML = '';
    for (let i=0; i<searchResults.length; i++) {
        resultsHTML += `
            <li class="p-4 rounded-lg dark:hover:bg-gray-600">
                <h2 class="text-xl">${searchResults[i].title}</h2>
                <span class="text-base text-indigo-100"><a href="./?searchQuery=${searchResults[i].author}" class="text-purple-400">${searchResults[i].author}</a> · ${searchResults[i].releaseDate} · ${searchResults[i].pages} pages</span>
            </li>
        `;
    }
    return resultsHTML;
}