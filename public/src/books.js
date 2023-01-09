// Passing
function findAuthorById(authors, id) {
  return authors.find((author) => id == author.id);
}

function findBookById(books, id) {
  return books.find((book) => id == book.id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  let unborrowedBooks = books.filter((book) => book.borrows[0].returned);
  return [borrowedBooks, unborrowedBooks];
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
