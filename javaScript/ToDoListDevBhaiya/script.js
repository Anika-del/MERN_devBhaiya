let todolist = document.getElementById("todotask");
let addmeButtn = document.getElementById("addme");
let showMyList = document.getElementById("showTodoList");
let todoArrayp = [];

//niche ke comment wale code yha rhega bhaiya samjhane ke liye kiye the
//o niche h kuki yha bhut code ho jaa rha tha
// add me button 
let listOfTask = document.createElement("ul");

addmeButtn.addEventListener("click", function(){
     if(todolist.value != ""){
      todoArrayp = [...todoArrayp,  todolist.value];
     }
    console.log(todoArrayp);
    todolist.value = "";

    listOfTask.innerText = "";

    todoArrayp.forEach((element, index) => {
        let listItem = document.createElement("li")
        listItem.innerText= element;
        listOfTask.appendChild(listItem);
    })
    showMyList.appendChild(listOfTask);
})


    // to get data from input box 
    // let getData = () => {
    //   todolist.addEventListener("change", function(e){
    //     todoArrayp = [...todoArrayp, e.target.value];
    //     console.log(todoArrayp);
    //   })
    // }


    {/* <div> 
    <ul> 
    <li></li>   ///////////////////////////
    <li></li>
    </ul> 
    </div> */}


    // let stName = ["akash", "vikash", "Sourbh"];

    //let listOfTask = document.createElement("ul");
    //let listItem = document.createElement("li");  // <li> </li>
    //listItem.innerText = "hello";                 // <li> hello </li>
    //listOfTask.appendChild(listItem);    // <ul> <li>hello</li></ul>
    //showMyList.appendChild(listOfTask)   // <div> <ul> <li> hello</li></ul> </div>

    // let listOfTask = document.createElement("ul");

    //stName.forEach((element ,index ) => {
    //let listItem = document.createElement("li");
    //listItem.innerText = element;  // <li>akash </li>
    //listOfTask.appendChild(listItem);  // <ul> <li> akash </li>  </ul>
    //})

    // showMyList.appendChild(listOfTask);