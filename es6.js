//Object Literals

function studentsinfo(name,age){
  return{
    name,
    age 
  }
  
}
// console.log(studentsinfo("Radifa",7));

let message = {
    // body(){
    'body name'(){
      return "Hi I am Object Function";
    }   
}
// console.log(message.body());
console.log(message['body name']());