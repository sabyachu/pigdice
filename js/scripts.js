//Business Logic

function Game(player, randomnum, turnscore, totalscore){
	this.player = 1;
	this.turnscore = turnscore;
	this.totalscore = 0;
	this.randomnum = randomnum;
}

Game.prototype.diceRoll = function(){
	this.randomnum = Math.ceil(Math.random() * 6);
};

Game.prototype.switchTurn = function(){
	if(this.player === 1){
		this.player = 2;
	} else if (this.player === 2){
		this.player = 1;
	}
};

Game.prototype.scoreKeeper = function(){
	debugger;
	if(this.randomnum === 1){
		this.turnscore = 0;
		this.switchTurn();
	} else {
		this.turnscore = this.turnscore + this.randomnum;
		this.totalscore = this.totalscore + this.turnscore;
		debugger;
	}
};


//User Interface
$(document).ready(function(){
	$("form.game").submit(function(event) {
		event.preventDefault();
		$(".gameboard").show();
		$(".playgame").hide();

		var pigdice = new Game (1, 1, 0, 0);


		$("#hold1").click(function(){
			alert("Hello! Hold1");
		});

		$("#roll1").click(function(){
			pigdice.diceRoll();
			pigdice.scoreKeeper();

		});
	});
});

// Make the code run for each player by calling the function play on each players turn
// figure out a way to find out who's turn it is....
