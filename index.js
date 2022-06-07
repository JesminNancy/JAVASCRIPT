// js BOM
// popup boxes - alert, confirm, prompt

// function deleteAnything(){
//   let value = confirm("Are You Sure Delete?");
//   if(value){
//     console.log("Deleted");
//   }else{
//     console.log("Not Deleted");
//   }

// }

// deleteAnything();

let name = prompt("Enter Your Name : ");
var h1 = document.createElement("h1");
let text;

if(name == null || name == ''){
  text = "No name found";
}else{
  text= "Welcome "+ name;
}

var textNode = document.createTextNode(text);
h1.appendChild(textNode);
document.body.appendChild(h1);