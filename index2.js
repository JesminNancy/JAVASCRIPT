"use strict"
//Default Parameter
// function message(text = "Hello This Is Default Parameter"){
// console.log(`${text}`);
// }
// message();
// message("I love Es6 Programming");

//Rest Parameter
function sum(x, y,...z){
  console.log(`x=${x}, y=${y}, z=${z}`);
}
sum(10,20,30,40,50,60)