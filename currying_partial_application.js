// Currying and Partial Application in JavaScript
// =============================================
//
// Currying: Transforming a function with multiple arguments into a sequence of functions each taking a single argument.

function add(a) {
  return function(b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); // 8

// ES6 arrow function version
const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(10)); // 20

// Partial Application: Fixing a few arguments of a function and producing another function.
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const sayHelloTo = partial(greet, 'Hello');
console.log(sayHelloTo('Alice')); // 'Hello, Alice!'

// Libraries like lodash provide _.curry and _.partial for these patterns. 