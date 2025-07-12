// ES6 Modules in JavaScript
// ------------------------
// ES6 introduced a native module system for JavaScript using 'import' and 'export' keywords.
// Modules help organize code, enable reuse, and avoid polluting the global namespace.

// --- Example 1: Named Exports ---
// In mathUtils.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;

// In another file:
// import { add, PI } from './mathUtils.js';
// console.log(add(2, 3)); // 5
// console.log(PI);        // 3.14159

// --- Example 2: Default Export ---
// In greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
// In another file:
// import greet from './greet.js';
// console.log(greet('Alice'));

// --- Example 3: Import All ---
// import * as math from './mathUtils.js';
// console.log(math.add(1, 2));
// console.log(math.PI);

/*
Explanation:
- Named exports: Use 'export' before declarations. Import with curly braces.
- Default export: Only one per file. Import without curly braces.
- Import all: Use '* as alias' to import everything as an object.
- File extension (.js) is required in browser environments.
- Modules are always in strict mode.

Interview Tip:
- Be ready to explain the difference between named and default exports, and how to import them.
- Know that modules are static (imports are hoisted) and only evaluated once.
*/ 