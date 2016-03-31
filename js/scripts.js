//Business Logic

function Game(player, randomnum, turnscore, totalscore){
	this.player = 1;
	this.turnscore = 0;
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
		$("#hold2").hide();
		$("#roll2").hide();

		var pigdiceplayer1 = new Game (1, 1, 0, 0);
		var pigdiceplayer2 = new Game (1, 1, 0, 0);




		$("#hold1").click(function(){
			pigdiceplayer1.holdScore();
			$("#hold1").hide();
			$("#roll1").hide();
			$("#hold2").show();
			$("#roll2").show();
		});

		$("#roll1").click(function(){
			pigdiceplayer1.diceRoll();
			$(".randomnumber").text(pigdiceplayer1.randomnum);

			if (pigdiceplayer1.randomnum === 1) {
				$("#hold1").hide();
				$("#roll1").hide();
				$("#hold2").show();
				$("#roll2").show();
			}


			pigdiceplayer1.scoreKeeper();
			$(".player1score").text(pigdiceplayer1.totalscore);
			$(".turnscore").text(pigdiceplayer1.turnscore);

		});







		$("#hold2").click(function(){
			pigdiceplayer2.holdScore();
			$("#hold1").show();
			$("#roll1").show();
			$("#hold2").hide();
			$("#roll2").hide();
		});

		$("#roll2").click(function(){
			pigdiceplayer2.diceRoll();
			$(".randomnumber").text(pigdiceplayer2.randomnum);

			if (pigdiceplayer2.randomnum === 1) {
				$("#hold1").show();
				$("#roll1").show();
				$("#hold2").hide();
				$("#roll2").hide();
			}

			pigdiceplayer2.scoreKeeper();
			$(".player2score").text(pigdiceplayer2.totalscore);
			$(".turnscore").text(pigdiceplayer2.turnscore);

		});



	});
});

// Make the code run for each player by calling the function play on each players turn
// figure out a way to find out who's turn it is....
