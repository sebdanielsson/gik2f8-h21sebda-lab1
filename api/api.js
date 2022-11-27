const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
    showLoading();
    const result = await fetch(url)
        .then((result) => result.json())
        .catch((e) => e);
    return result;
}