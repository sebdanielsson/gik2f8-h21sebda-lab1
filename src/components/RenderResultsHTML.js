const RenderResultsHTML = (searchResults) => {
    let resultsHTML = '';
    for (let i=0; i<searchResults.length; i++) {
        resultsHTML += `
            <li class="p-4 rounded-lg dark:hover:bg-gray-600">
                <h2 class="text-xl">${searchResults[i].title}</h2>
                <span class="text-base">${searchResults[i].author} · ${searchResults[i].year}</span>
            </li>
        `;
    }
    return resultsHTML;
}