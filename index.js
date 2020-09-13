const data = [];
for (let i = 0; i < 5; i++) {
  data.push(randomInt(1, 100));
}

console.log(data);
const sortedArray = quicksort(data);
console.log(sortedArray);

// console.log(binarySearch(sortedArray, 45));
// console.log(recursiveSum(sortedArray));
// console.log(count(sortedArray));
// console.log(recursiveMax(sortedArray)); // Имитация Math.max(...sortedArray)
