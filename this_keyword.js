// The 'this' Keyword in JavaScript
// --------------------------------
// 'this' refers to the object that is executing the current function.
// Its value depends on how a function is called (runtime binding).

// --- Example 1: Global Context ---
console.log(this); // In browser: window, In Node.js: global object

// --- Example 2: Object Method ---
const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // 'Hello, Alice' (this refers to person)

// --- Example 3: Function (Non-Strict vs Strict Mode) ---
function show() {
  console.log(this);
}
show(); // In non-strict: global object; in strict: undefined

// --- Example 4: Constructor Function ---
function Car(model) {
  this.model = model;
}
const myCar = new Car('Toyota');
console.log(myCar.model); // 'Toyota' (this refers to new object)

// --- Example 5: Arrow Functions ---
const obj = {
  value: 42,
  regular: function() { return this.value; },
  arrow: () => this.value
};
console.log(obj.regular()); // 42
console.log(obj.arrow());   // undefined (arrow functions don't have their own 'this')

/*
Explanation:
- 'this' is determined by how a function is called, not where it is defined.
- Arrow functions do NOT have their own 'this'; they inherit it from the enclosing scope.
- In methods, 'this' refers to the object before the dot.
- In constructors, 'this' refers to the new instance.
- In global functions, 'this' is the global object (or undefined in strict mode).

Interview Tip:
- Be ready to explain 'this' in different contexts and the difference with arrow functions.
*/ 