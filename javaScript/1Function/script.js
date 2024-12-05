// *
// **
// *
// **
// ***

// let myStar="";

// for(let i = 1; 5 >= i; i++){

//   for(let j = 1; i >= j; j++ ){
//     myStar += "*";
//   }
//   console.log(${myStar} \n);
//   myStar = "";
// }


// function functionName (parameter1 ,parameter2){
//   return parameter1 + parameter2;
// }


// function printMyMessage(){
//   console.log("hello world");
//   console.log(" hey there");
// }

// printMyMessage();  
// printMyMessage();
// printMyMessage();
// printMyMessage();
// printMyMessage();

// let i = 1;
// while(5 >= i){
//   printMyMessage();
//   i++
// }


// let a = 5;
// function sayAlok(){
//   console.log("hellow world");
// }
// console.log(a);
// sayAlok();

// let num1 = 8;
// let num2 = 9;
// function addition(p1 , p2){ 
//     return p1 + p2;
// }


// function inrToDollar(countOfUSD){
//   return countOfUSD * 88;
// }
// let userInputValue = 10;
// console.log(inrToDollar(userInputValue));

// give me 2 input 
// give additin multiply divide subtract // 1 2 3 4

// let a = 10;    
// let b = 5;    
// let userInput = 2; 

// function addition(input1 , input2){
// console.log(input1 +input2);
// }

// function multiplication(input1 , input2){
//   console.log(input1 * input2);
// }

// function division(input1 , input2){
//   console.log(input1 / input2); 
// }

// function subtraction(input1 , input2){
//   console.log(input1 - input2);
// }

// // code will start here
// switch(userInput){  //2
//   case 1 : addition(a,b);
//   break;
//   case 2 : multiplication(a,b);
//   break;
//   case 3 : division(a,b);
//   break;
//   case 4 : subtraction(a,b);
//   break;
//   default : console.log("invalid input");
// }
// ==========================================================

// Named function 
function justAddMe(a,b) {
  // console.log(a+b);
  return a+b;
}


// Annonomys Function
let addMe =  function(a, b){
  // console.log(a+b);
  return a+b
}

let a = 10;
let b = 15; 
console.log( addMe(a , b));
console.log(justAddMe(a,b));

// =================================================================


// Syntax of Arrow function
// () => {}
let abc = () => {console.log("hello world")};   // type one 
abc();

let abc1 = () => console.log("my word without curly bracket");  // type two
abc1();

let abc2 = () => 5+4 ;  // type three
console.log(abc2());

let abc3  = a => a+a;   // type fouth
console.log(abc3(5));

let justAdd = (a,b) => {
  return a+b;
}
console.log(justAdd(6,7));


///////////// IIFE ///
(
function(){
  console.log(" helow world");
}
)();

(function() {
  console.log("This runs immediately!");
})();

//////////////////////////////////////////////////////////

// key and value pair 

// let objName = {
//   key : value,
//   key1 : valeu
// }

// let  hi = "hello";
// console.log(hi);

let studentObj = {
  hand : 2,                          // property
  hairColor : "black",
  leg : 2,
  sayMyName : function(){             // metods 
    console.log(" hi this is me");
  }
}

// objectName.key

console.log(studentObj.hairColor);
console.log(studentObj.leg);
console.log(studentObj.sayMyName());

// ///////////
// empId, salary , empAGe, emdpName

let employee = {
  empId : 5756,
  empSalary : 55000,
  empAge : 55,
  empName : " Rahul Kumar",   // Rahul kumar object
  showMyEmpId : function () {
    console.log(this.empId);
  }
}

employee.showMyEmpId();
// * in arrwo function this keyword not working 
// * this key used for current context 

//  chage in property values
employee.empId = 6666;
console.log(employee.empId);

//  add new property 
employee.add = " this is my address";
console.log(employee.add);

delete employee.empAge;
console.log(employee);

// object inside object

let student = {
  studetnName : " ajay",
  studentRollN : 22,
  studentClass : 5,
  studentAdd : {
    add : "vijay nagar",
    city : "Gaziabad",
    country : "India",
    postalCode: 201009
  },
  medicalReport : {
    bloodTest : "postive",
    bloodGroup : "AB+"
  }
}

console.log(student.studentAdd);
console.log(student.medicalReport);

document.write(student.studetnName);
document.write(student.studentRollN);
alert(student.studetnName)