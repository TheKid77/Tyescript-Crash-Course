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

interface Item {
  id: number;
}

const loanQueue: Loan[] = [];
let nextLoanId = 1;
let nextBookId = 5;

function addNewBook(bookObj: Omit<Book, "id">): void {
  const newBook = {
    id: nextBookId++,
    ...bookObj,
  };
  library.push(newBook);
}

function borrowBook(title: string): Loan | undefined {
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

function returnBook(loanId: number): Loan {
  const loan = loanQueue.find((loan) => loan.id == loanId);

  if (!loan) {
    console.error(`${loanId} was not found in the loan queue`);
    throw new Error();
  }
  loan.status = "returned";
  loan.book.availableCopies++;
  return loan;
}

function getBookDetail(identifier: string | number): Book | undefined {
  if (typeof identifier === "string") {
    return library.find(
      (book) => book.title.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    return library.find((book) => book.id === identifier);
  }
}

function getDetail<T extends Item>(array: T[], id: number) {
  return array.find((item) => item.id === id);
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
returnBook(3);
console.log(library);
console.log(loanQueue);
console.log(getBookDetail(1));

console.log(getDetail<Book>(library, 1));
console.log(getDetail<Loan>(loanQueue, 1));

console.log("All Loans...");
loanQueue.forEach((element) => {
  console.log(element.book, element.status);
});

// forEach Loop Style
console.log("All Books...");
library.forEach((element) => {
  console.log(element.id, element.author, element.title);
});

// for Loop Style
for (let i = 1; i <= 5; i++) console.log(i);

// while Loop Style
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// while Loop Style
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// for...in Loop Style
const person = { name: "John", age: 30 };
for (const key in person) {
  console.log(key, person[key as keyof typeof person]);
}

// for...of Loop Style
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}
