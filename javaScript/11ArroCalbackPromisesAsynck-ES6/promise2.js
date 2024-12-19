
///////////////// promise by dev bhaiya ////////////////////////
/*Your code showcases a great example of using Promises in JavaScript to handle asynchronous tasks sequentially */

// 1. Promise Initialization: 
const promise = new Promise((resolve, reject) => {});
promise.then(() => {}).catch(() => {}).finally(() => {});
//This creates a new Promise that resolves or rejects based on conditions 
// and handles the result using .then(), .catch(), and .finally() methods.

// 2. Asynchronous Functions: 
//(i). makeFrame Function:  
function makeTyre() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tyre = 4;
            resolve(tyre);
        }, 3000);
    });
}
 //(ii). makeFrame Function:
 function makeFrame(tyre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let tyFr = tyre + 5;
            resolve(tyFr);
        }, 3000);
    });
}   //  Takes tyre as an input, simulates a 3-second delay, and resolves with the value tyre + 5.

// (ii). makeFinalCar Function:  
function makefinalCar(tyFr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let finalCar = tyFr + 6;
            resolve(finalCar);
        }, 3000);
    });
}   //  Takes tyFr as an input, simulates a 3-second delay, and resolves with the value tyFr + 6.

// 3. Chaining Promises:
makeTyre()
    .then((tyre) => {
        console.log(tyre); // Output the tyre count
        return makeFrame(tyre); // Pass the tyre to makeFrame
    })
    .then((tyFr) => {
        console.log(tyFr); // Output the frame count
        return makefinalCar(tyFr); // Pass the frame to makefinalCar
    })
    .then((finalCar) => {
        console.log(finalCar); // Output the final car count
    })
    .catch((error) => {
        console.log("This is an error: " + error); // Handle any errors
    });

    /*
    Output Sequence:
1. "4" (after 3 seconds)

2. "9" (after another 3 seconds)

3. "15" (after another 3 seconds) */