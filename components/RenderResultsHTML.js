const RenderResultsHTML = (searchResults) => {
    let resultsHTML = '';
    for (let i=0; i<searchResults.length; i++) {
        resultsHTML += `
            <li class="flex flex-row p-4 rounded-lg dark:hover:bg-gray-600">
                <img class="max-h-32 max-w-max rounded-lg mr-4" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_512/https://blog.snappa.com/wp-content/uploads/2022/01/ebook-cover-size-guide.jpg" alt="${searchResults[i].title} cover">
                <div class="flex flex-col justify-center">
                    <span class="text-2xl">${searchResults[i].title}</span>
                    <a href="./?q=${searchResults[i].author}" class="text-base text-purple-400">${searchResults[i].author}</a>
                    <span class="text-sm"><span class="font-bold">Published: </span>${searchResults[i].releaseDate}</span>
                    <span class="text-sm"><span class="font-bold">Pages: </span>${searchResults[i].pages}</span>
                </div>
            </li>
        `;
    }
    return resultsHTML;
}