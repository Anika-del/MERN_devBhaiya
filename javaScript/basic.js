// first approach using let 

// let color = "green";
// color = "yellow";
// let color = "blue";

let myAge = 77;
{
   let myAge = 55;
   console.log(myAge);    //  
}
console.log(myAge);         //



// second approach using var 

// var age = 99;
// age = 66;
// var age = 77;

var yourAge = 77;
{
  var yourAGe = 66;
  console.log(yourAGe);   
}
console.log(yourAGe);     


// third approach using const

// const myNewAGe = 88;
// myNewAge = 77;
// const myNewAge = 55;

{
  const friendAge = 59;
  console.log(friendAge);   //59
}

console.log(friendAge);     //59