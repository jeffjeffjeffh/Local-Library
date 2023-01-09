//This function passed in Qualified, done
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
  const arrSorted = accounts.sort((a, b) => {
    return a.name.last < b.name.last ? -1 : 1;
  });
  return arrSorted;
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
