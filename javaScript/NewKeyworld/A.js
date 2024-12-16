class Person {
    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display details
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating a new instance of Person
const person1 = new Person('Anika', 25);

// Calling a method on the instance
person1.displayDetails();  // Output: Name: Anika, Age: 25
