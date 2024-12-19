// Base function constructor
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

// Derived function constructor
function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor
    this.breed = breed;
}

// Inherit the prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override the speak method
Dog.prototype.speak = function() {
    console.log(`${this.name}, the ${this.breed}, barks.`);
};

// Create an instance of the derived function
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();  // Output: Buddy, the Golden Retriever, barks.
