const RenderDetailsHTML = (bookId) => {
    let detailsHTML = `
        <div id="bookDetails"class="bookDetails flex flex-row p-4 gap-4 rounded-lg absolute bg-gray-900 text-indigo-400">
            <img class="max-w-[84px] aspect-[21/32] rounded-lg" src="${bookList[bookId-1].coverImage}" alt="${bookList[bookId-1].title} cover">
            <div class="flex flex-col justify-center">
                <span class="text-2xl">${bookList[bookId-1].title}</span>
                <a href="./?q=${bookList[bookId-1].author}" class="text-base text-indigo-500">${bookList[bookId-1].author}</a>
                <span class="text-sm"><span class="font-bold">Published: </span>${bookList[bookId-1].releaseDate}</span>
                <span class="text-sm"><span class="font-bold">Pages: </span>${bookList[bookId-1].pages}</span>
            </div>
        </div>
    `;
    return detailsHTML;
}