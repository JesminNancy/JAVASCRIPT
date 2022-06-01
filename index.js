//How to crate object
//How to print the value of an object
//Adding a constructor

function Student(name,age,cgpa,lang){

  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;
  
  this.display = function(){
  
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }
}

var student1 = new Student ("Nancy",27,4.23,["Bangla","English","Hindi"]);
var student2 = new Student ("Radifa",20,3.23,["Bangla","English","Urdu"]);
var student3 = new Student ("Ripon",29,5.23,["Bangla","English","Hindi","Arbiya"]);

student1.display();
student2.display();
student3.display();