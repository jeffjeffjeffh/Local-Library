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

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
