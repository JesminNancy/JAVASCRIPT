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
let students = {
name : "Rahim",
age : 23,
cgpa : 4.5
}
for(let x in students){
  console.log(`${x} : ${students[x]}`);
}