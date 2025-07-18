﻿# ⚙️ Advanced JavaScript Concepts

This README provides a comprehensive overview of **advanced JavaScript** concepts that go beyond the basics. It's ideal for developers preparing for interviews, building complex applications, or mastering JavaScript in-depth.

---

## 📚 Table of Contents

- Closures
- Prototypes & Inheritance
- `this` Keyword
- Call, Apply, and Bind
- Event Loop & Async JS
- Promises & Async/Await
- Modules (ES6)
- Destructuring
- Spread & Rest Operators
- Higher-Order Functions
- Currying
- Memoization
- Debounce & Throttle

---

## 🔒 Closures

A closure is created when a function retains access to its lexical scope even when executed outside that scope.

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

## 🧬 Prototypes & Inheritance

JavaScript uses prototype-based inheritance.

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hello, ${this.name}`;
};
```

---

## 🤔 The `this` Keyword

`this` refers to the object from which the function was called.

- In global scope: `window` (in browsers)
- In object method: the object itself
- In arrow functions: inherits from parent scope

---

## 📞 Call, Apply, and Bind

- `call()` invokes a function with a given `this` and arguments.
- `apply()` is like call but takes an array of arguments.
- `bind()` returns a new function with `this` bound.

```javascript
const obj = { num: 5 };
function show() {
  console.log(this.num);
}
show.call(obj); // 5
```

---

## 🕑 Event Loop & Async JS

The **event loop** handles asynchronous operations via the **call stack** and **task queue**.

```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

Output:
```
Start
End
Promise
Timeout
```

---

## ⛓️ Promises & Async/Await

```javascript
function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Data"), 1000));
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}
getData();
```

---

## 📦 ES6 Modules

```javascript
// add.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './add.js';
```

---

## 🧰 Destructuring

```javascript
const [a, b] = [1, 2];
const { name, age } = { name: "Sam", age: 21 };
```

---

## ... Spread & Rest Operators

- Spread: expand arrays/objects
- Rest: collect remaining items into an array

```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

## 🧠 Higher-Order Functions

Functions that take or return other functions.

```javascript
function greet(msg) {
  return function(name) {
    return `${msg}, ${name}`;
  };
}
```

---

## 🍛 Currying

Transforming a function into a sequence of functions each taking one argument.

```javascript
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
```

---

## 🚀 Memoization

Caching function results to avoid repeated computation.

```javascript
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    return (cache[n] = fn(n));
  };
}
```

---

## 🎯 Debounce & Throttle

- **Debounce**: Wait until no calls have happened for `n` ms.
- **Throttle**: Limit execution to once every `n` ms.

```javascript
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

---

