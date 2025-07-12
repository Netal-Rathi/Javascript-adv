// Prototypal Inheritance in JavaScript
// ====================================
//
// JavaScript uses prototypal inheritance. Objects inherit from other objects.

// Example: Using constructor functions
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};

const dog = new Animal('Rex');
dog.speak(); // 'Rex makes a noise.'

// Inheritance
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + ' barks!');
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // 'Buddy makes a noise.'
myDog.bark();  // 'Buddy barks!'

// Modern ES6 class syntax (syntactic sugar)
class Cat extends Animal {
  speak() {
    console.log(this.name + ' meows.');
  }
}

const cat = new Cat('Whiskers');
cat.speak(); // 'Whiskers meows.' 