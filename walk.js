//Canvas
var can = document.getElementById("walk");
var con = can.getContext("2d");

var particle_colors = ["red", "blue", "green", "orange", "purple", "black", "yellow", "grey"];
var particle_list = [];
var movement = [[1,0], [0,1], [-1,0],[0,-1]]

//Particle
function Particle() {
	this.x = can.width/2;
	this.y = can.height/2;
	var radius = 4;
	var color = particle_colors[Math.floor(Math.random()*particle_colors.length-1)];
	
	this.get_radius = function() {
		return radius;
	};
	
	this.get_color = function() {
		return color;
	};
	
	this.update_position = function(move) {
		this.x += move[0];
		this.y += move[1];
	};
}