// class Car {
//   constructor(tyre, model){
//     this.tyre = tyre;   // curent context 
//     this.model = model;
//   }
// }

//const xuv = new Car(4, "xxyy");  // first object 
//const pxuv = new Car(8, "yypp"); // secnd object
//const txuv = new Car(12, "pxmy"); // thrid object 

//console.log(xuv);
//console.log(pxuv);
//console.log(txuv);

////////////////////////////////////////////////////////

// const student = {
//   stname : "rupesh",
//   stRololNo : 55
// }

// console.log(student);

//////////////////////////////    Inheritance ////////////////////////////

// class Father {
//   constructor(hand){
//     this.hand = hand;
//   }
// }

// class son extends Father{
//   constructor(hands, legs){
//     super(hands);
//     this.legs = legs;
//   }
// }

// const s1 = new son(2, 2);
// console.log(s1);

// const f1 = new Father(2);
// console.log(f1);

///////////////////////////////////////////////////////////////////////////////////////

// console.log("hellow world");
// for(let i = 0; i<999999999; i++){

// }

// console.log(" hi this is me ");
// for(let i = 0; i<999999999; i++){

// }

// let sum = 5+5;
// for(let i = 0; i<999999999; i++){

// }
// console.log(sum);

// function display(a){
//   console.log(` your output is ${a}`)
// }

// function add(a, b, displayme){
//   sum = a+b;
//   displayme(a);
// }


// add(5,6,display)

// kisi function kai argument mai kisi function ko aise argument bhjete hai toh use call back function kehte hai 

// async await

// console.log(" befre printhing the set time out fucntion");

// function callTheSetTimeOut(){
//   setTimeout(printThis, 3000);
// }

// function printThis(){
//   console.log(" this this is print by setTime out Function");
// }

// callTheSetTimeOut();


// console.log(" after printhing the set time out fucntion");


// const apiData = async () => {
//   await
// }

//  promises in javascript 

// let alokPromise = new Promise(function(alokResolve , alokReject){
//  alokResolve(" yes we have done the job");
//  alokReject(" sorry we are uanbel to do the task");
// })

// alokPromise.then(
//   function(value){console.log(value)},
//   function(error){console.log(error)}
// );


// Asynchronusition 
//console.log(" bef5to set time out ")  //sync

//function checkAsync(){
//  setTimeout(() => {console.log("helow world setimeout")}, 3000)
//}  // async 

//checkAsync();

//console.log(" after st time out ");  // sync


//  async function depend  on another async function 

// function makeTyre(callbackreturn){
//   setTimeout(() => {
//     let tyre = 4;
//     callbackreturn(tyre)
//   }, 3000)
// }

// function makeFrame(callbackreturn , tyre){
//   setTimeout(() => {
//     let tyFr = tyre + 5 ;
//     callbackreturn(tyFr);
//   }, 3000)
// }

// function makefinalCar(callbackreturn, tyfr){
//   setTimeout(() => {
//     let finalCar = tyfr + 6;
//     callbackreturn(finalCar);
//   }, 3000)
// }

// function callbackreturn(tyre){
//  console.log(tyre);
// }

// makeTyre((tyre) => {
//   console.log(tyre);
//       makeFrame((tyfr) => {
//         console.log(tyfr);
//             makefinalCar((finalcar) => {
//             console.log(finalcar);
//             }, tyfr);
//       },  tyre);
// })


// promises in javascript 

//const promise = new Promise(( resolve , reject) => {});
//promise.then(() => {}).catch(() => {}).finally(() => {}); 


// function makeTyre(){
//  return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let tyre = 4;
//         resolve(tyre);
//       }, 3000)
//  })
// }

// function makeFrame(tyre){
//   return new Promise (( resolve , reject) => {
//     setTimeout(() => {
//       let tyFr = tyre + 5 ;
//       resolve(tyFr);
//     }, 3000)
//   })

// }

// function makefinalCar(tyfr){
//   return new Promise((resolve , reject) => {
//     setTimeout(() => {
//       let finalCar = tyfr + 6;
//       resolve(finalCar);
//     }, 3000)
//   })

// }

// makeTyre()
// .then((tyre) => {console.log(tyre); return  makeFrame(tyre)})
// .then((tyfr) => {console.log(tyfr); return makefinalCar(tyfr)})
// .then((finalCar) => { console.log(finalCar)})
// .catch((eror) => {"this is an error"+ eror});

//  async and await 

function makeTyre(){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        let tyre = 4;
        resolve(tyre);
      }, 3000)
    })
   }
  
  function makeFrame(tyre){
    return new Promise (( resolve , reject) => {
      setTimeout(() => {
        let tyFr = tyre + 5 ;
        resolve(tyFr);
      }, 3000)
    })
  
  }
  
  function makefinalCar(tyfr){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        let finalCar = tyfr + 6;
        resolve(finalCar);
      }, 3000)
    })
  
  }
  
  
    async function checkValue(){
      try{
        const getValue =  await makeTyre();
        console.log(getValue);
        const tyfr = await makeFrame(getValue);
        console.log(tyfr);
        const finalcar = await makefinalCar(tyfr);
        console.log(finalcar);
      } catch(err){
        console.log(" here is err"+ err)
      }
   }
  
   checkValue();