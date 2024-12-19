// Simulating asynchronous tasks with Promises
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Task Complete');
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second Task Complete');
            resolve();
        }, 1000);
    });
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third Task Complete');
            resolve();
        }, 1000);
    });
}

function fourthTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fourth Task Complete');
            resolve();
        }, 1000);
    });
}

// Using Promises to avoid callback hell
firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(fourthTask)
    .then(() => {
        console.log('All tasks complete');
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    });
