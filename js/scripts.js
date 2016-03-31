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

Game.prototype.switchType = function(){
	if(this.playtype === 1){
		this.playtype = 2;
	} else if (this.playtype === 2){
		this.playtype = 1;
	}
};

Game.prototype.scoreKeeper = function(){
	if(this.randomnum === 1){
		this.turnscore = 0;
		this.switchTurn();
	} else {
		this.turnscore = this.turnscore + this.randomnum;
		this.totalscore = this.totalscore + this.turnscore;
	}
};

Game.prototype.holdScore = function(){
	this.totalscore = this.totalscore + this.turnscore;
	this.switchTurn();
};



//User Interface
$(document).ready(function(){
	$("form.game").submit(function(event) {
		event.preventDefault();
		$(".gameboard").show();
		$(".playgame").hide();

		var pigdice = new Game (1, 1, 0, 0);


		$("#hold1").click(function(){
			pigdice.holdScore();
		});

		$("#roll1").click(function(){
			pigdice.diceRoll();
			$(".randomnumber").text(pigdice.randomnum);

			pigdice.scoreKeeper();
			$(".player1score").text(pigdice.totalscore);
			$(".turnscore").text(pigdice.turnscore);

		});



	});
});

// Make the code run for each player by calling the function play on each players turn
// figure out a way to find out who's turn it is....
