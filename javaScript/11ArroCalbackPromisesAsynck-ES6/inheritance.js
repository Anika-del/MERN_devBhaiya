////////////////////////////    Inheritance dev bhaiya ////////////////////////////
class Father {   //parent class
  constructor(hand){
    this.hand = hand;
  }
}

class son extends Father{    //child class
  constructor(hands, legs){
    super(hands);
    this.legs = legs;
  }
}

const s1 = new son(2, 2);   //object 1
console.log(s1);
const f1 = new Father(2);   //object 2
console.log(f1);


//////////////////////// copilet /////////////////////////////
// Base class (Parent)
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Derived class (Child)
class Dog extends Animal {
    constructor(name, breed) {
        // Call the constructor of the parent class
        super(name);
        this.breed = breed;
    }

    // Override the speak method
    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

// Create an instance of the derived class
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();  // Output: Buddy, the Golden Retriever, barks.
