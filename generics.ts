const bookPageCounts = [256, 430, 480, 192, 400];
const popularGenres = ["mystery", "romance", "science fiction", "fantasy"];
const authors = [
  { name: "Jane", booksPublished: 5 },
  { name: "Mark", booksPublished: 12 },
];

function getLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

console.log(getLastItem(bookPageCounts));
console.log(getLastItem(popularGenres));
console.log(getLastItem(authors));
