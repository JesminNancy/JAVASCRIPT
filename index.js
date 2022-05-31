// Break and Continue...

/* for(var i= 1; i<=100 ; i++){
    
    if(i== 10){
      break;
    }
  
  document.write(" " + i);
} */


for(var i= 1; i<=100 ; i++){
    
    // if(i %2 == 0){
    //   continue;
    // }
    
    if(i %2 !== 0){
      continue;
    }
  
  document.write(" " + i);
} 