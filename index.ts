const library = [
  { title: "To Kill a MockingBird", author: "Harper Lee", availableCopies: 3 },
  { title: "1984", author: "George Orwell", availableCopies: 2 },
  { title: "Pride and Prejudice", author: "Jane Austen", availableCopies: 4 },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    availableCopies: 2,
  },
];

const loanQueue = [];
const nextLoanId = 1;

function addNewBook(bookObj) {
  library.push(bookObj);
}

function borrowBook(title) {
  const selectedBook = library.find((bookObj) => bookObj.title === title);

  if (!selectedBook) {
    console.error(`${title} does not exist in library`);
    return;
  }

  if (selectedBook.availableCopies <= 0) {
    console.error(`${title} has no available copies`);
    return;
  }
  selectedBook.availableCopies--;

  const newLoan = { id: nextLoanId++, book: selectedBook, status: "borrowed" };
  loanQueue.push(newLoan);
  console.log(loanQueue);
  return newLoan;
}

function returnBook(loanId) {
  const loan = loanQueue.find((loan) => loan.id == loanId);
  loan.status = "returned";
  loan.book.availableCopies++;
  return loan;
}

console.log(library);

addNewBook({
  title: "Brave New World",
  author: "Aldous Huxley",
  availableCopies: 3,
});
borrowBook("1984");
borrowBook("Brave New World");
borrowBook("1984");
borrowBook("xx1984");
returnBook(3);
console.log(library);
