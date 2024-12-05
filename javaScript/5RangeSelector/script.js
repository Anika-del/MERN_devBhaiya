let rangeSlider = document.getElementById("selectRange");
let rangeValue = document.getElementById("showRangeValue");

rangeSlider.addEventListener("change", function(){
  rangeValue.innerText = rangeSlider.value;
})