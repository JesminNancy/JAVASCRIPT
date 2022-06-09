//Object Literals

// function studentsinfo(name,age){
//   return{
//     name,
//     age 
//   }
  
// }
// // console.log(studentsinfo("Radifa",7));

// let message = {
//     // body(){
//     'body name'(){
//       return "Hi I am Object Function";
//     }   
// }
// // console.log(message.body());
// console.log(message['body name']());

// For..of and for..in

// const names = ["Jorina","Rahim", "Karim"];
// for(let name of names){
//   console.log(name);
// }
// let students = {
// name : "Rahim",
// age : 23,
// cgpa : 4.5
// }
// for(let x in students){
//   console.log(`${x} : ${students[x]}`);
// }

//For Vs Foreach

// var numbers = [10,20,30,40,50];
// for(var x= 0; x<numbers.length; x++){
// console.log(numbers[x]);
// }
var numbers = [10,20,30,40,50];
var squqreNumbers = [];
numbers.forEach(function(x,index,arr){
    // console.log(x);
    // squqreNumbers.push(x*x);
    arr[index] = x+5;
});
console.log(numbers);