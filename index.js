console.log("index.js loaded!");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const ball = document.querySelector(".ball");

ball.addEventListener("dragstart",onDrag);

box1.addEventListener("drop",onDrop);
box2.addEventListener("drop",onDrop);

box1.addEventListener("dragover",onDragOver);
box2.addEventListener("dragover",onDragOver);

function onDrag(event){
    event.dataTransfer.setData("text",event.target.id);
    // console.log("dragging", event.target.id);
    // console.log(document.getElementById(event.target.id));
    // console.log(event.dataTransfer.getData("text"));
    
}
function onDrop(event){
    event.preventDefault();
    const el = event.dataTransfer.getData("text");
    console.log("function onDrop:");
    console.log(document.getElementById(event.target.id));
    console.log(document.getElementById(el));
    console.log(event.dataTransfer);
    event.target.style.borderWidth = '5px';
    ball.parentElement.style.borderWidth = '1px';
    event.target.appendChild(document.getElementById(el));
}

function onDragOver(event) {
    event.preventDefault();
    
}