const { randomArray } = require("../helper");
const { insertionSort } = require("./insertionSort");

const shuffleArray = randomArray(10);
const orderedArray = insertionSort(shuffleArray);

console.log("Shuffle Array: ");
console.log(shuffleArray.join(' '));
console.log("Ordered Array: ");
console.log(orderedArray.join(' '));