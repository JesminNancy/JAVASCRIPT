// If Else if Else

var marks = prompt("Enter Your Marks : ");

if(marks>100 || marks<0)
  document.write("Invalid Number");
else if(marks>=80 && marks<=100)
  document.write("Your Grade is A+");
else if(marks>=70 && marks<=79)
  document.write("Your Grade is A");
else if(marks>=60 && marks<=69)
  document.write("Your Grade is A-");
else if(marks>=50 && marks<=59)
  document.write("Your Grade is B");
else if(marks>=40 && marks<=49)
  document.write("Your Grade is C");
else if(marks>=33 && marks<=39)
  document.write("Your Grade is D");
else
  document.write("You Are Failed");
  
Vowel / Consonant

var letter = prompt("Enter a letter");
  letter = letter.toLowerCase();
if(letter=="a" || letter=="e" || letter=="u" || letter=="0" || letter=="i")
document.write("Vowel");
else
document.write("Constant");

