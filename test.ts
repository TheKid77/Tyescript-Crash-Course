const myArray: string[] = ["apple", "banana", "orange"];
const searchString: string = "banana";

const foundString: string | undefined = myArray.find(
  (item: string) => item === searchString
);

if (foundString) {
  console.log(`Array contains the string '${searchString}'.`);
} else {
  console.log(`Array does not contain the string '${searchString}'.`);
}
