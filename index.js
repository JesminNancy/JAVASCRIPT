var locationDiv = document.querySelector(".location-div");
var p1 = locationDiv.children[0];
p1.textContent = location.href;
var p2 = locationDiv.children[1];
p2.textContent = location.hostname;
var p3 = locationDiv.children[2];
p3.textContent = location.protocol;
var p4 = locationDiv.children[3];
p4.textContent = location.port;


var vistbtn = document.getElementById("visitbtn");
vistbtn.addEventListener("click", function(){

location.assign("https://www.youtube.com/");

});