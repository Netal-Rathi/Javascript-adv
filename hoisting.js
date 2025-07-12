// Hoisting in JavaScript
// ----------------------
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function).
// Only declarations are hoisted, not initializations.

// --- Example 1: Variable Hoisting ---
console.log(a); // undefined (not ReferenceError!)
var a = 5;
// The above is interpreted as:
// var a;
// console.log(a); // undefined
// a = 5;

// --- Example 2: Function Hoisting ---
foo(); // 'Hello from foo!'
function foo() {
  console.log('Hello from foo!');
}
// Function declarations are fully hoisted (both name and body).

// --- Example 3: let/const are NOT hoisted the same way ---
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// --- Example 4: Function Expressions are NOT hoisted ---
// bar(); // TypeError: bar is not a function
var bar = function() {
  console.log('Hello from bar!');
};

/*
Explanation:
- var declarations are hoisted and initialized with undefined.
- let and const are hoisted but not initialized (temporal dead zone).
- Function declarations are hoisted completely.
- Function expressions (assigned to variables) are NOT hoisted as functions.

Interview Tip:
- Be ready to explain the difference between var, let, const hoisting, and function vs function expression hoisting.
*/ 