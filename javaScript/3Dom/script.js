let firstname = document.getElementById("firstName");
let middleName  = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
let fatherName = document.getElementById("fatherName");
let  dob= document.getElementById("dob");

let student = {

}



let finalSubmit = document.getElementById("finalSubmit");

finalSubmit.addEventListener("click", function(){


 if(firstname.value != ""){
  student.firstname = firstname.value ; 
 } else {
  console.log(" enter your first name")
 }

 if(middleName.value != ""){
  student.middleName = middleName.value ; 
 } else {
  console.log(" enter your middle name")
 }

 if(lastName.value != ""){
  student.lastName = lastName.value ; 
 } else {
  console.log(" enter your last name")
 }

 if(fatherName.value != ""){
  student.fatherName = fatherName.value ; 
 } else {
  console.log(" enter your father name")
 }

 if(dob.value != ""){
  student.dob = dob.value ; 
 } else {
  console.log(" enter your dob ");
 }

//  console.log(student);
 console.log(student.firstname);
 console.log(student.middleName);
 console.log(student.lastName);
 console.log(student.fatherName);
 console.log(student.dob);
  
})