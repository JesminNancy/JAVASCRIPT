//Array Methods...
var names = ["Nancy","Radifa","Ripon","Asma"];
console.log(names);

//Push..
// names.push("Rahim");
// console.log(names);

//POP..
// names.pop();
// console.log(names);
//Shift..
// names.shift();
// console.log(names);
//UnShift..
// names.unshift("Rahim");
// console.log(names);

// Adding Element Using Splice
// names.splice(2,1,"Karim Sokina");
// console.log(names);

// Removing Element Using Splice
//  names.splice(1,2);
//  console.log(names);
 
 // Slice
 
//  var newarray = names.slice(1)
//  console.log(newarray);
//  console.log(names);

// Sorting
// var sortName = names.sort();
// names.reverse();
// console.log(sortName);

//Number Sorting

var number = [10,20,45,68,3,1];
number.sort(function(a,b){
  // return a-b;
  return b-a;
});
console.log(number);