const books = require("./fixtures/books.fixture");
const authors = require("./fixtures/authors.fixture");

/*function getMostCommonGenres(books) {
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
*/

function getMostPopularAuthors(books, authors) {
  let bestAuthors = authors.map((author) => {
    let bookCount = books.reduce((total, book) => {
      if (book.authorId == author.id) {
        return total + book.borrows.length;
      }
      return total;
    }, 0);
    return {
      name: author.name.first + " " + author.name.last,
      count: bookCount,
    };
  });
  return getHighest(bestAuthors, 5);
}

function getHighest(arr, count) {
  return arr.sort((a, b) => b.count - a.count).slice(0, count);
}

console.log(getMostPopularAuthors(books, authors));
