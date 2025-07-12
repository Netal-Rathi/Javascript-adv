// Closures in JavaScript
// ======================
//
// A closure is a function that remembers its outer variables and can access them.
// This is possible because functions in JavaScript form closures.

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = makeCounter();
console.log(counter2()); // 1 (separate closure)

// Closures are useful for data privacy and function factories.
// Example: Data privacy
function secretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(newSecret) { secret = newSecret; }
  };
}

const holder = secretHolder('shh!');
console.log(holder.getSecret()); // 'shh!'
holder.setSecret('new secret');
console.log(holder.getSecret()); // 'new secret' 