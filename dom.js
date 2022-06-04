// Changing Style Dynamically
/* var myVar = document.getElementById("paraID");

 function addstyle(){
  myVar.classList.add("para_style");
 }

 function removestyle(){ 
 myVar.classList.remove("para_style");
} */

// Event Listener

/* var myVar = document.querySelector("h1");
 myVar.addEventListener("mouseover", function(){
  myVar.classList.add("para_style");
});
myVar.addEventListener("mouseout", function(){
  myVar.classList.remove("para_style");
 });*/
 
// Multiple Event Listener 

var len = document.querySelectorAll(".myButton").length;
for(i=0; i<len; i++){

  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text +  " is clicked";
    });
}

/* document.querySelectorAll(".myButton")[1].addEventListener("click", function(){
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML = text +  " is clicked";
  });  
document.querySelectorAll(".myButton")[2].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text +  " is clicked";
  }); */