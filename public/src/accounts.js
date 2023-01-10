// Passing
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

// Passing
function sortAccountsByLastName(accounts) {
  const arrSorted = accounts.sort((a, b) => {
    return a.name.last < b.name.last ? -1 : 1;
  });
  return arrSorted;
}

// Passing
function getTotalNumberOfBorrows({ id }, books) {
  let total = 0;
  books.forEach((book) => {
    const arr = book.borrows;
    arr.forEach((borrow) => {
      if (borrow.id == id) total++;
    });
  });
  return total;
}

// Passing
function getBooksPossessedByAccount({ id }, books, authors) {
  const borrowedBooks = getBorrowedBooks(id, books);
  const borrowedAuthors = getAuthorObjects(borrowedBooks, authors);
  const newBooks = injectAuthors(borrowedBooks, borrowedAuthors);
  return newBooks;
}

// Helper function that returns an array containing all of the book
// objects that an individual is CURRENTLY borrowing.
const getBorrowedBooks = (userId, books) => {
  let arr = books.filter((book) => {
    if (book.borrows[0].id == userId && !book.borrows[0].returned) {
      return book;
    }
  });
  return arr;
};

// Helper function that returns an array of objects
// for every author represented in a list of books
const getAuthorObjects = (books, authors) => {
  const arr = authors.filter((author) => {
    for (let key in books) {
      let book = books[key];
      if (book.authorId == author.id) return true;
    }
  });
  return arr;
};

// Helper function that adds author information
// to an array of book objects
const injectAuthors = (books, authors) => {
  let arr = books.map((book) => {
    for (let key in authors) {
      let author = authors[key];
      if (author.id == book.authorId) {
        book.author = author;
        return book;
      }
    }
  });
  return arr;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
