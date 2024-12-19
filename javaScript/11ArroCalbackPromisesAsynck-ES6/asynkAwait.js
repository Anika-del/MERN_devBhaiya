/////////////////////// async await dev bhaiya ////////////////////
//This code demonstrates the use of setTimeout to execute a function after a delay.
// 1. initial code
console.log(" befre printhing the set time out fucntion");  //print to the console immediately.

// 2. Function to Call setTimeout:
function callTheSetTimeOut(){
  setTimeout(printThis, 3000);  //callTheSetTimeOut sets a 3-second delay before calling the printThis function.
}

function printThis(){
  console.log(" this this is print by setTime out Function");
  //printThis logs "this this is print by setTime out Function" to the console after the delay.
}

callTheSetTimeOut();  //This callTheSetTimeOut, starting the 3-second timer.


console.log(" after printhing the set time out fucntion"); //print on console immediately after the function call.


//////////////////////////////////// async await dev bhaiya /////////////////////////

 const apiData = async () => {
    console.log("Fetching data...");
    // Simulating an API call with a delay using setTimeout wrapped in a Promise
    const fetchData = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 2000);
    });

    // Await the simulated API call
    const data = await fetchData;
    console.log(data);  // Logs "Fetched data" after 2 seconds
};

// Call the async function
apiData();

