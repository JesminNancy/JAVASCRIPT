function highRunScorer(playersInfo){
  var hightestScroer = playersInfo[0][0];
  var hightestScroe = playersInfo[0][1];
  for(var x= 1; x<playersInfo.length; x++){
    if(hightestScroe<playersInfo [x][1]){
      hightestScroe = playersInfo[x][1];
      hightestScroer = playersInfo[0][0];
    }
  }
  
  return hightestScroer;
  
}



var playersInfo = [

  ["Ashraful", 95],
  ["Shakib", 15],
  ["Mashrafi", 60],
  ["Musfiq", 30],
  ["Riyadh", 75],
];

 var names = highRunScorer(playersInfo);
 document.write(names);