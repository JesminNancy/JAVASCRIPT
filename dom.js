
// var myVar = document.getElementById("paraID");

// function addstyle(){
//   myVar.classList.add("para_style");
// }

// function removestyle(){ 
//   myVar.classList.remove("para_style");
// }


var myVar = document.querySelector("h1");

myVar.addEventListener("mouseover", function(){

  myVar.classList.add("para_style");

});

myVar.addEventListener("mouseout", function(){

  myVar.classList.remove("para_style");

});