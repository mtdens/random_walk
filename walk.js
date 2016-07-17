//Canvas
var can = document.getElementById("walk");
var con = can.getContext("2d");

//Particle
function Particle(){
	this.x = can.width/2; //Should be canvas.x/2
	this.y = can.height/2;	//Should be canvas.y/2
	var radius = 4;
}