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
  /* 
    Look for a genre match for each book. If a match is not found, add one to
    the array and give it a count of 1. Otherwise, retrieve that genre's index
    in the array and increase its count property by 1.
  */
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
  return getHighest(arr, 5);
}

function getMostPopularBooks(books) {
  let bestBooks = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  return getHighest(bestBooks, 5);
}

function getMostPopularAuthors(books, authors) {}

// Helper function that sorts an array by its objects' 'count' property,
// in descending order, and returns the top x.
function getHighest(arr, count) {
  return arr.sort((a, b) => b.count - a.count).slice(0, count);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
