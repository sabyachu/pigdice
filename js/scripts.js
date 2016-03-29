//Business Logic

function Player(fullname, turnscore, totalscore){
	this.fullname = fullname;
	this.turnscore = 0;
	this.totalscore = 0;
}

Player.prototype.play = function(question){
	if(question === true){ //If roll
		var randomnum = Math.ceil(Math.random() * 6);

		if (randomnum === 1){
			this.turnscore = 0;
		} else {
			this.turnscore = this.turnscore + randomnum;
			this.totalscore = this.totalscore + this.turnscore;
		}

	} else { //if hold
		this.totalscore = this.totalscore + this.turnscore;
	}
};




//User Interface
$(document).ready(function(){
	$("form.game").submit(function(event) {
		event.preventDefault();
		var player1 = $("input#player1name").val();
		var player2 = $("input#player2name").val();

		var firstplayer = new Player(player1);
		var secondplayer = new Player(player2);

		$(".playersinfo").hide();
		$(".rollorhold").show();

		$("#hold").click(function(){
			var question = false;
		});

		$("#roll").click(function(){
			var question = true;
		});
	});
});

// Make the code run for each player by calling the function play on each players turn
// figure out a way to find out who's turn it is....
