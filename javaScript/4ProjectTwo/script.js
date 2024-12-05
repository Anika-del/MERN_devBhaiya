
// project two
//increment and decrement number if we click - and +

let increButton = document.getElementById("increment");
let dcreButton = document.getElementById("dcrement");
let counterValue = document.getElementById("counterValue");
let currentValue = 0; 

increButton.addEventListener("click", function(){
  currentValue = currentValue + 1;
  counterValue.innerText = currentValue;
})

dcreButton.addEventListener("click", function(){
  currentValue = currentValue - 1;
  counterValue.innerText = currentValue;
})

