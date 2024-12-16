function fetchData(callback) {
    setTimeout(() => {
        // Simulate data fetching with a timeout
        let data = "Sample data";
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Fetched Data: " + data);
}

// Calling fetchData and passing displayData as the callback
fetchData(displayData);

/*
A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some kind of operation or event has completed. Callbacks are a fundamental concept in asynchronous programming in JavaScript, enabling code to run sequentially and manage operations that take time, such as fetching data from a server.

Key Concepts:
Definition:

A function passed as an argument to another function.

Execution:

It is executed after the completion of another function.

Asynchronous Operations:

Commonly used with operations like AJAX requests, timers, or event listeners.

Explaination of code 
Explanation:
fetchData Function:

Accepts a callback function as an argument.

Uses setTimeout to simulate an asynchronous operation that takes 2 seconds.

Callback Invocation:

After the timeout completes, callback(data) is called, passing the fetched data to the callback function.

displayData Function:

The callback function that logs the fetched data to the console.

Function Call:

fetchData(displayData); calls fetchData and passes displayData as the callback.

Interview Explanation:
Purpose: Explain that a callback function allows you to execute code after an asynchronous operation completes.

Usage: Highlight common use cases such as handling responses from API calls, timers, or user interactions.

Example Walkthrough: Walk through the provided example to illustrate how callbacks work in practice.*/