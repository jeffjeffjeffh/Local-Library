// Passing
function getTotalBooksCount(books) {
  return books.length;
}

// Passing
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// Passing
function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      count++;
    }
  });
  return count;
}

// Passing
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
  arr = arr.sort((a, b) => b.count - a.count).slice(0, 5);
  return arr;
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
