//Canvas
var can = document.getElementById("walk");
var con = can.getContext("2d");

var particle_colors = ["red", "blue", "green", "orange", "purple", "yellow", "grey", "pink", "brown", "aqua", "maroon", "lime", "salmon", "magenta"];
var particle_list = [];
var rate = 3;
var walk_status = false;

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
	
	this.movement = function() {
		var x = rate*Math.cos(2*Math.PI*Math.random());
		var y = rate*Math.sin(2*Math.PI*Math.random());
	
		return [x,y];
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

//Slider Code
$(document).ready( function() {
	
		//Number of Particles
    $("#slider").slider({
			max: 200,
			min: 1,
			slide: function(event, ui) {				
				if(!walk_status){
        	$("#num_p").html(ui.value);
				}
    } 
		});
	
		//Energy Level
		$("#slider2").slider({
			max: 10,
			min: 1,
			step: 0.1,
			slide: function(event, ui) { 
				if(!walk_status){
           $("#num_e").html(ui.value);
				}
    } 
		});
	
		//Time Count
		$("#slider3").slider({
			max: 180,
			min: 1,
			slide: function(event, ui) {
				if(!walk_status){
            $("#num_t").html(ui.value);
				}
    } 
		});	
  }	
);

for(var i= 0; i < 100; i++){
	particle_list.push(new Particle());
}

var time = setInterval(particle_flow, 100);
var time_count = 0;

function particle_flow() {
	time_count += 1;
	con.clearRect(0, 0, can.width, can.height);
	
	for(var j= 0; j < particle_list.length; j++){
		particle_list[j].update_position(particle_list[j].movement());
		particle_list[j].draw_particle();
	}		
	
	//Time counter
	if (time_count == 300){
		clearInterval(time);
	}
}