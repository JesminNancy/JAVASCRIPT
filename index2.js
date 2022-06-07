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

// saveButton.addEventListener('click' , displayCount);

// function displayCount(){
//   let count = 1;
//   message.textContent = count ;
//   setInterval(() => {
//     count++;
//     message.textContent = count ;
//   }, 2000);
// }

saveButton.addEventListener('click', startClock);

function startClock(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);
  var time = hours +":"+minutes+":"+seconds;
  message.textContent = time;
  
  setInterval(startClock, 1000);
  
 
}
function formatTime(value){
if(value < 10){
  value = "0" + value;
  }
  return value;
}