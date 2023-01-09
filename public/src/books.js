// Passing
function findAuthorById(authors, id) {
  return authors.find((author) => id == author.id);
}

function findBookById(books, id) {
  return books.find((book) => id == book.id);
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
