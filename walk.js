//Canvas
var can = document.getElementById("walk");
var con = can.getContext("2d");

var particle_colors = ["red", "blue", "green", "orange", "purple", "black", "yellow", "grey", "pink", "brown", "aqua", "maroon"];
var particle_list = [];
var movement = [[3,0], [0,3], [-3,0],[0,-3], [3,3], [3,-3], [-3,3], [-3,-3]];

//Particle
function Particle() {
	this.x = can.width/2;
	this.y = can.height/2;
	var radius = 4;
	var color = particle_colors[Math.floor(Math.random()*particle_colors.length)];
	
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
	
	this.draw_particle = function() {
		con.beginPath();
		con.arc(this.x, this.y, this.get_radius(), 0, 2*Math.PI);
		con.fillStyle = this.get_color();
		con.fill();
		con.lineWidth = 2;
		con.strokeStyle = 'black';
		con.stroke();
	};
}

for(var i=0; i < 1; i++){
	particle_list.push(new Particle());
}

var time = setInterval(particle_flow, 100);
var time_count = 0;

function particle_flow() {
	time_count += 1;
	con.clearRect(0, 0, can.width, can.height);
	
	for(var j= 0; j < particle_list.length; j++){
		particle_list[j].update_position(movement[Math.floor(Math.random()*movement.length)]);
		particle_list[j].draw_particle();
	}	
	
	console.log(time_count);
	if (time_count == 300){
		clearInterval(time);
	}
}
