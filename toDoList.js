const toDoItems = document.getElementsByClassName("to-Do-Items")[0];
const input = document.getElementById("input"); 
const trashIcon = document.getElementById("trash"); 

input.addEventListener("keydown", function(event){
    if (event.key === "Enter")
       addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild  = document.createElement("div");
    var checkIcon  = document.createElement("i");
    var trashIcon  = document.createElement("i");

    divParent.className = "item"; // also in this line we are setting the value of the class atribute to this element that we chose 
    divParent.innerHTML = '<div>'+input.value+'<div>'; // in this line we are getting the input value that was writted by the user in order for later display it 

    checkIcon.className = "fa-solid fa-square-check"; //The className property of the Element interface gets and sets the value of the class attribute of the specified element.
    checkIcon.style.color = "lightgray"; //with this line we are defining the style of this certain element "checkIcon" inside our script 
    checkIcon.addEventListener("click", function(){ // in this function we are just tellign the computer to change the color of our checkIcon element whenever the event "click" is triggered by the user 
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';

}