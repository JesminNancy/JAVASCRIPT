// Error Handing try,catch, finally
//The Throw Statement-Custom error
document.querySelector("#checkbtn").addEventListener("click", function(){

  var num = document.querySelector("#numText").value;
  console.log(num);
  
  try{
  if(num <5 ){
      throw "Input is too low"
  }else if(num > 10) {
    throw "Input is too high"
  }
  }catch(e){
  console.log(e);
  }

});