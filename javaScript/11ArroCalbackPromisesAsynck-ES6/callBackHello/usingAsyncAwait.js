// Using async/await to handle asynchronous tasks
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
async function runTasks() {
    try {
        await firstTask();
        console.log('First Task Complete');

        await secondTask();
        console.log('Second Task Complete');

        await thirdTask();
        console.log('Third Task Complete');

        await fourthTask();
        console.log('Fourth Task Complete');

        console.log('All tasks complete');
    } catch (error) {
        console.log('An error occurred:', error);
    }
}

// Calling the async function to run tasks
runTasks();
