// async and await 
/////////////////////////// dev bhaiya /////////////////////////

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

//Async Function to Chain Promises:
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
 /* Uses await to handle each promise sequentially.

Logs each intermediate result and the final result.

Handles any potential errors with a try...catch block. */

 checkValue();  //Calling the Async Function: