// project one
// yellow = 1 red = 0   randmly color change if we click

let divBox = document.getElementById("thisDiv");
let colorMemory = 1;
divBox.addEventListener("click", function(){
  if(colorMemory == 1){
    divBox.style.backgroundColor = "red";
    colorMemory = 0;
  } else {
    divBox.style.backgroundColor = "yellow";
    colorMemory = 1;
  }
})

