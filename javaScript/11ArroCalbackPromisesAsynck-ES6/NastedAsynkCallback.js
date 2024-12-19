
//////////////////// dev bhaiya 

/*This code effectively demonstrates the concept of asynchronous operations and callback functions
 in JavaScript. You create a sequence of asynchronous functions that depend on the completion of
 the previous ones. Let's review and refine it a bit:*/

 //synchronization function 
 // 1. Initial Logs and Basic setTimeout Usage:
 console.log("before set time out"); // sync

function checkAsync() {
    setTimeout(() => {
        console.log("hello world setTimeout");
    }, 3000);
}  // async

checkAsync();

console.log("after set time out");  // sync

// 2. Using Callbacks for Synchronization: Async Functions with Callbacks:
// Function to simulate making tyres
function makeTyre(callbackReturn) {
    setTimeout(() => {
        let tyre = 4;
        callbackReturn(tyre);
    }, 3000);
}

// Function to simulate making frame
function makeFrame(callbackReturn, tyre) {
    setTimeout(() => {
        let tyFr = tyre + 5;
        callbackReturn(tyFr);
    }, 3000);
}

// Function to simulate making final car
function makeFinalCar(callbackReturn, tyFr) {
    setTimeout(() => {
        let finalCar = tyFr + 6;
        callbackReturn(finalCar);
    }, 3000);
}

// Callback function to log results
function callbackReturn(result) {
    console.log(result);
}

// Chaining async functions
makeTyre((tyre) => {
    console.log(tyre);
    makeFrame((tyFr) => {
        console.log(tyFr);
        makeFinalCar((finalCar) => {
            console.log(finalCar);
        }, tyFr);
    }, tyre);
});
