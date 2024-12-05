// BOM browser object model 
// DOM document object model
// document.write(" hello world jdjd ksks kss sksk");
// alert(" hi this is me");
// let myNumber = prompt(" enter your number");
// document.write(myNumber);  

// let a = "10";
// let b = "30";
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a+b);

// let a1 = 10;
// let b1 = 30;
// console.log(typeof(a1));
// console.log(typeof(b1));
// console.log(a1+b1);

//let num1 = prompt(" enter your first number");  // data come in string form
//let num2 = prompt(" enter your secnd number");  // data come in strin form
//console.log(typeof(num1));  // string
//console.log(typeof(num2));  // string 
//let convNum1 = Number(num1);  // string to number convert
//let convNum2 = Number(num2);  // string to number convert
//console.log(typeof(convNum1)); // number
//console.log(typeof(convNum2)); // number 
//document.write(num1+num2);  // concatination
//document.write("   ")
//document.write(convNum1 + convNum2);  // operation Addittion

// let firstDiv  = document.getElementById("divONe");  // by id 
// let StoringAllClasses = document.getElementsByClassName("box")[0]; // by classname
// let byTagName = document.getElementsByTagName("div");
// let byAll = document.querySelectorAll("#divONe");
// let thisONe = document.querySelectorAll(".box");
// let byTagNameAll = document.querySelectorAll("div");

// let theFirstDiv = document.getElementById("divONe"); 
// theFirstDiv.innerText = "change by JS";

// let StoringAllClasses = document.getElementsByClassName("box")[4];
// StoringAllClasses.innerText = " hi ";

// let byTagName = document.getElementsByTagName("div")[2];
// byTagName.innerText = " hello";

// let byAll = document.querySelectorAll("#divONe")[0];
// byAll.innerText = " hey";


// Events in js 
// elementName.addEventListener("event type ", function())
//  onclick
//  onchange
//  onmousedown
//  onmouseout
//  onkeydown
//  onload


// type one
// let firstBox = document.getElementById("divONe");
// firstBox.addEventListener("click", function(){
//   firstBox.innerText = " clicked";
// })

// type two
let secondDiv = document.getElementById("divtwo");
function justClickMe(){
  secondDiv.innerText = " hey";
}

let inputValues = document.getElementById("inputValue");
console.log(inputValues);
inputValues.addEventListener("change", function(){
  console.log(inputValues.value);
})

// function justPrint(){
//   console.log(" changing");
// }


// let varName = document.getElementById("dksks");
// varName.innerText = " hello world";

// document.getElementById("kdks").innerTex="hello";


// how to apply css using JS
// document.getElementById(id).style.property = new style


let firstBox = document.getElementById("divONe");
firstBox.addEventListener("click", function(){
  firstBox.style.backgroundColor = "red";
})