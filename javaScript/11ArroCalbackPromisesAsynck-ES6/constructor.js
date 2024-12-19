///////////////////////////// dev bhaiya ///////////////////////////////////
class Car {
  constructor(tyre, model){
    this.tyre = tyre;   // curent context 
    this.model = model;
  }
}

const xuv = new Car(4, "xxyy");  // first object 
const pxuv = new Car(8, "yypp"); // secnd object
const txuv = new Car(12, "pxmy"); // thrid object 

console.log(xuv);
console.log(pxuv);
console.log(txuv);

////////////////////////// copilet //////////////////////
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Anika', 25);
person1.greet();  // Output: Hello, my name is Anika and I am 25 years old.
