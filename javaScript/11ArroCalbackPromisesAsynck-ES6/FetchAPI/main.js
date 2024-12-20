///////////////////// dev bhaiya fetch api ////////////////////////
/*Key Points:
1. response.json():-
 In the getProductDetails function, you need to await the response.json() call to properly parse the JSON data.

2. Display Data:-
 Instead of using document.write(), which can overwrite the entire document, consider using innerHTML to append data to a specific element in your HTML. */

// API ( application programing interface )
// C => create
// R => Read
// U => update
// D => delete 
// Read means GET method 
// Create means POST method nhi huaa abhi

 const url = "https://fakestoreapi.com/products";

// Async function to fetch and log product details
async function getProductDetails() {
    try {
        const response = await fetch(url);
        const data = await response.json(); // Await response.json()
        showdata(data); // Call the showdata function with fetched data
    } catch (err) {
        console.log("We are getting some error: " + err);
    }
}

// Function to display data
function showdata(getdata) {
    const output = document.getElementById('output'); // Assuming an element with id 'output'
    output.innerHTML = ''; // Clear previous data
    for (let i = 0; i < getdata.length; i++) {
        const product = document.createElement('div'); // Create a new div for each product
        product.textContent = getdata[i].title; // Set the text content to the product title
        output.appendChild(product); // Append the product div to the output element
    }
}

// Fetch product details and show them
getProductDetails();
