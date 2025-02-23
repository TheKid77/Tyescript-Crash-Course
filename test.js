const myArray = ["apple", "banana", "orange"];
const searchString = "banana";
const foundString = myArray.find((item) => item === searchString);
if (foundString) {
    console.log(`Array contains the string '${searchString}'.`);
}
else {
    console.log(`Array does not contain the string '${searchString}'.`);
}
