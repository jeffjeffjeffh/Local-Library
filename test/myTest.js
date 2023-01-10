const books = require("./fixtures/books.fixture");

function getMostCommonGenres(books) {
  arr = [];
  books.forEach((book) => {
    if (!arr.find((genre) => genre.name == book.genre)) {
      arr.push({ name: book.genre, count: 1 });
    } else {
      let i = arr.findIndex((genre) => {
        return genre.name == book.genre;
      });
      arr[i].count += 1;
    }
  });
  arr.slice(5);
  return arr;
}

console.log(getMostCommonGenres(books));
