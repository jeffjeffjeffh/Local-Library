// Passing
function findAuthorById(authors, id) {
  return authors.find((author) => id == author.id);
}

// Passing
function findBookById(books, id) {
  return books.find((book) => id == book.id);
}

// Passing
function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  let unborrowedBooks = books.filter((book) => book.borrows[0].returned);
  return [borrowedBooks, unborrowedBooks];
}

// Passing
function getBorrowersForBook({ borrows }, accounts) {
  let result = borrows.map((borrow) => {
    const accountInfo = accounts.find((account) => account.id == borrow.id);
    const newBorrow = { ...borrow, ...accountInfo };
    return newBorrow;
  });
  result.splice(10);
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
