const RenderDetailsHTML = (item) => {
    let detailsHTML = `
        <div id="book_details" class="book-details min-w-fit hidden flex-row p-4 gap-4 rounded-lg absolute bg-gray-900 text-indigo-400">
            <img class="max-w-[84px] aspect-[21/32] rounded-lg" src="${item.coverImage}" alt="${item.title} cover">
            <div class="flex flex-col justify-center">
                <span class="text-xl sm:text-2xl">${item.title}</span>
                <span class="text-xs sm:text-sm text-indigo-500">${item.author}</span>
                <span class="text-xs sm:text-sm"><span class="font-bold">Published: </span>${item.releaseDate}</span>
                <span class="text-xs sm:text-sm"><span class="font-bold">Pages: </span>${item.pages}</span>
            </div>
        </div>
    `;
    return detailsHTML;
}