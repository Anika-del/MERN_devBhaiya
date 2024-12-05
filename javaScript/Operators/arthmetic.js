// Arithmatic operator
// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// % : Modulus (remainder)
//++ increment
//-- decrement

let a = 5; b = 6; let c=6;
let sum = a+b; //addition
console.log(sum); //11

let sub = b-a; //subtraction
console.log(sub) //1

let mul = a*b; //multiplication
console.log(mul) //30

let div = a/b ; //division
console.log(a/b); //0.8

let mod = a%div; //modulus
console.log(6%2);

console.log(++a);  //5
console.log(--b);  //6
console.log(c**4);

// 2. Assignment Operators
// = : Assignment
// += : Add and assign
// -= : Subtract and assign
// *= : Multiply and assign
// /= : Divide and assign
// %= : Modulus and assign

let x = 55;  //simplay assigne number value
let y = x;  // assigned another variable value to another variable
console.log(x);
console.log(y);


let w = 10; 
// w += w;  // w = w + w;
w += 10;  // w = w + 10 // w = 10 + 10  // w = 20
console.log(w);

let yo = 55;
yo -= 3;   // yo = yo - 3;  // yo = 55 -3  // yo = 52 
console.log(yo); //52

let mx = 2;
mx *= 2;    // mx = mx * 2 // mx = 2 * 2 // mx = 4
console.log(mx);  // 4

let di = 6;
di /= 2;   // di = di / 2 // di = 6 / 2 // di = 3
console.log(di); // 3

let mo = 6;
mo %= 2;  // mo = mo % 2 // mo = 6 % 2  // mo = 0
console.log(mo); // 0


// 3. Comparison Operators
// == : Equal to
// != : Not equal to
// === : Strict equal to
// !== : Strict not equal to
// > : Greater than
// < : Less than
// >= : Greater than or equal to
// <= : Less than or equal to

let ram = 55;
let shyam = 66;
console.log(ram == shyam);  
console.log(ram > shyam);  
console.log(ram < shyam);