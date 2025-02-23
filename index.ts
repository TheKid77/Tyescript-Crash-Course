type Book = {
  id: number;
  title: string;
  author: string;
  availableCopies: number;
};

type Loan = {
  id: number;
  book: Book;
  status: "borrowed" | "returned";
};

const library: Book[] = [
  {
    id: 1,
    title: "To Kill a MockingBird",
    author: "Harper Lee",
    availableCopies: 3,
  },
  { id: 2, title: "1984", author: "George Orwell", availableCopies: 2 },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    availableCopies: 4,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    availableCopies: 2,
  },
];

const loanQueue: Loan[] = [];
let nextLoanId = 1;

function addNewBook(bookObj: Book) {
  library.push(bookObj);
}

function borrowBook(title: string) {
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

  const newLoan: Loan = {
    id: nextLoanId++,
    book: selectedBook,
    status: "borrowed",
  };
  loanQueue.push(newLoan);
  console.log(loanQueue);
  return newLoan;
}

function returnBook(loanId: number) {
  const loan = loanQueue.find((loan) => loan.id == loanId);

  if (!loan) {
    console.error(`${loanId} was not found in the loan queue`);
    throw new Error();
  }
  loan.status = "returned";
  loan.book.availableCopies++;
  return loan;
}

console.log(library);

addNewBook({
  id: 5,
  title: "Brave New World",
  author: "Aldous Huxley",
  availableCopies: 3,
});
borrowBook("1984");
borrowBook("Brave New World");
borrowBook("1984");
returnBook(3);
console.log(library);
console.log(loanQueue);
