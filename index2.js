// setTimeout(()=>{
// console.log("Hello");

// },2000)

// setTimeout(display,3000);

// function display(){
//   console.log("display function");
// }

var saveButton = document.querySelector(".savebtn");
var message = document.querySelector(".message");

// saveButton.addEventListener("click" , saveUser);

// function saveUser(){

//   message.textContent = "User Registration Sucessful";
//   setTimeout(()=>{
//     message.textContent = "";
  
//   }, 3000);
// }

saveButton.addEventListener('click' , displayCount);

function displayCount(){
  let count = 1;
  message.textContent = count ;
  setInterval(() => {
    count++;
    message.textContent = count ;
  }, 2000);
}