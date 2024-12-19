 // promises in javascript 
 /////////////////// dev bhaiya ///////////////////////////
 /*Your code demonstrates the creation of a Promise in JavaScript and how to handle its resolved and rejected states. 
 However, there's a slight issue in how the Promise is constructed. In a Promise, either the resolve or reject function
  should be called, not both simultaneously */

let alokPromise = new Promise(function(alokResolve , alokReject){
 alokResolve(" yes we have done the job");
 alokReject(" sorry we are uanbel to do the task");
})

alokPromise.then(
  function(value){console.log(value)},
  function(error){console.log(error)}
);

///////////////////////// copilet ///////////////////////
let anikaPromise = new Promise(function(anikaResolve, anikaReject) {
    let jobDone = true; // Change this to false to test rejection

    if (jobDone) {
        anikaResolve("Anika, we have done the job");   //if true
    } else {
        anikaReject("Sorry, anika are unable to do the task");   //if false
    }
});

anikaPromise.then(
    function(value) { console.log(value); },
    function(error) { console.log(error); }
);
