//Display Even/Odd Number

var num = prompt("Enter A Number : ");

if(num%2 == 0)
document.write("Even");
if(num%2 !=0)
document.write("Odd");

// If Else if Else

var marks = prompt("Enter Your Marks : ");

if(marks>=80)
  document.write("Your Grade is A+");
else if(marks>=70)
  document.write("Your Grade is A");
else if(marks>=60)
  document.write("Your Grade is A-");
else if(marks>=50)
  document.write("Your Grade is B");
else if(marks>=40)
  document.write("Your Grade is C");
else if(marks>=33)
  document.write("Your Grade is D");
else
  document.write("You Are Failed");

