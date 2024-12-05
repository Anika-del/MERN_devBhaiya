//EMI Calculator

let loanAmount = document.getElementById("loanAmount"); 
// console.log(loanAmount);
let noOfmonth = document.getElementById("tenure");
let intereset = document.getElementById("percentage");
let finalEmi = document.getElementById("finalEmi");
let emiValue = 0;
function findMyEMI(){
   let loan_Amount = Number(loanAmount.value);
  //  console.log(loan_Amount);
   let no_ofMonth = Number(noOfmonth.value);
   let in_terest = Number(intereset.value);
    if(loanAmount.value != "" && noOfmonth.value !="" && intereset.value != ""){
      emiValue =  loan_Amount * in_terest * ((1+in_terest)^no_ofMonth / (1-(1+in_terest)^no_ofMonth))
      finalEmi.innerText = emiValue;
      console.log(emiValue);
    } else {
      alert(" please fill all fields");
    }
}

