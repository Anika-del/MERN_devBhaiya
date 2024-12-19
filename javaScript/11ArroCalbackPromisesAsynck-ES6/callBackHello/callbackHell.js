/*
Callback hell, also known as the "Pyramid of Doom," occurs when multiple nested callbacks make the
 code difficult to read and maintain. It often happens in JavaScript when handling asynchronous 
 operations, like making API calls, reading files, or processing events
 */
//Example of Callback Hell  ////////////////////dev bhaiya ke bolne par code likha hai copilet bhi kiya h help //////////
// Simulating asynchronous tasks with nested callbacks
function firstTask(callback) {
    setTimeout(() => {
        console.log('First Task Complete');
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log('Second Task Complete');
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log('Third Task Complete');
        callback();
    }, 1000);
}

function fourthTask(callback) {
    setTimeout(() => {
        console.log('Fourth Task Complete');
        callback();
    }, 1000);
}

// Nested callbacks leading to callback hell
firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            fourthTask(() => {
                console.log('All tasks complete');
            });
        });
    });
});
//avoid to hell calback code name avoidCallbackHello.js