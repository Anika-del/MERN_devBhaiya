
/////////////////////// callBackFunction dev bhaiya //////////////////////
// kisi function kai argument mai kisi function ko aise argument bhjete hai toh use call back function kehte hai 

function display(a){
    console.log(`Your output is ${a}`);
}

function add(a, b, displayme){
    let sum = a + b;
    displayme(sum); // Pass the sum to the display function
}

add(5, 6, display);  // Call function

///////////////////// copilet //////////////////////////////////////////////
// A function that takes another function as a parameter
function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
}

// A callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Calling the greet function with the callback
greet('Anika', sayGoodbye);

/*Explanation:
greet Function:

Takes two parameters: name and callback.

Prints a greeting message using the name parameter.

Calls the callback function.

sayGoodbye Function:

A simple function that prints "Goodbye!".

Function Call:

greet('Anika', sayGoodbye); calls greet with 'Anika' and sayGoodbye as arguments.

This results in the output: Hello, Anika followed by Goodbye!. */

