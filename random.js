
var numOfWin = 0;
var numOfLost = 0;
for(x=1; x<=5; x++){

    var gucessNumber = parseInt(prompt("Enter Your Number From 1 to 5 : "));
  
    var randomNumber = Math.floor(Math.random()*5)+1;
    
    if(gucessNumber==randomNumber){
      console.log("You have Win");
      numOfWin++;
    }
    else{
      console.log("You have lost. Random Number was " + randomNumber);
      numOfLost++;
    }
}

document.write("Total Number of Win : " + numOfWin + "<br>");
document.write("Total Number of Lost : " + numOfLost);