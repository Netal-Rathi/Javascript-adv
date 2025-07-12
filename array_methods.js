// Array Methods: map, filter, reduce in JavaScript
// -----------------------------------------------
// These are essential higher-order functions for processing arrays in a functional style.

// --- map ---
// Creates a new array by applying a function to each element.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// --- filter ---
// Creates a new array with elements that pass the test in the provided function.
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// --- reduce ---
// Reduces the array to a single value by applying a function cumulatively.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

// --- Chaining Example ---
const result = numbers
  .map(n => n * 3)
  .filter(n => n > 5)
  .reduce((acc, curr) => acc + curr, 0);
console.log(result); // 27

/*
Explanation:
- map: Transforms each element and returns a new array (same length).
- filter: Returns a new array with only elements that pass the test.
- reduce: Accumulates array values into a single result (sum, product, etc).
- These methods do not mutate the original array.

Interview Tip:
- Be ready to write and explain map/filter/reduce code, and to chain them for complex transformations.
*/ 