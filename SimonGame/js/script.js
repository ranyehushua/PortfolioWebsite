var power = false; //power is set to off when page is loaded
var game; //variable to store the Game object
var timers = []; //store all timers in an array, so they can easily all be killed with power off or other appropriate events

//declaring audio objects
var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
greenAudio.playbackRate = .5;

var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
redAudio.playbackRate = .5;

var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
yellowAudio.playbackRate = .5;

var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
blueAudio.playbackRate = .5;

var errorAudio = new Audio('audio/gameover.mp3');

//global public timeout function for making sure moves are made in time
function setTurnTimer() {
	var t = window.setTimeout(function () {
		game.playerError();
	}, 4000);
	return t;
}

//global public function for clearing all timeouts and intervals
function clearTimers() {
	timers.forEach(function(t) {
		window.clearTimeout(t);
	});
	timers = [];
}

function display(color) {
	switch(color) {
		case 'green':
			$('#green').css('background-color', '#00F74A');
			greenAudio.play();
			break;
		case 'red':
			$('#red').css('background-color', '#FF0F17');
			redAudio.play();
			break;
		case 'yellow':
			$('#yellow').css('background-color', '#CCF707');
			yellowAudio.play();
			break;
		case 'blue':
			$('#blue').css('background-color', '#094AFF');
			blueAudio.play();
			break;
	}
}

function returnStatic(color) {
	switch(color) {
		case 'green':
			$('#green').css('background-color', '#00A74A');
			greenAudio.pause();
			greenAudio.currentTime = 0;
			break;
		case 'red':
			$('#red').css('background-color', '#9F0F17');
			redAudio.pause();
			redAudio.currentTime = 0;
			break;
		case 'yellow':
			$('#yellow').css('background-color', '#CCA707');
			yellowAudio.pause();
			yellowAudio.currentTime = 0;
			break;
		case 'blue':
			$('#blue').css('background-color', '#094A8F');
			blueAudio.pause();
			blueAudio.currentTime = 0;
			break;
	}
}


//Declaring listener functions / UI and UX
$('#power').click(function() {
	//if power is off and you are turning on
	if (!power) {
		$('#slider').css('float', 'right');
		power = true;
		$('#count span').css('color', '#DC0D29');
		console.log('Power ON');
		game = new Game();
	} else { //else if power is already on and turning off
		game.reset(); //just in case the game is turned off while a color is changed, this will set all colors back to dim
		clearTimers();
		$('#slider').css('float', 'left');
		power = false;
		$('#count span').css('color', '#430710');
		console.log('Power OFF');
		$('#strict').css('background-color', '#888800');
		$('#count span').text('--');
		errorAudio.pause(); //in case error buzzer still playing when turn off, kill sound
		errorAudio.currentTime = 0;
		game = {};//clear game object
	}
});

$('#strict').click(function() {
	if (power) {
		if (!game.strict) {
			game.strict = true;
			console.log('Strict mode ON');
			$('#strict').css('background-color', '#FFFF00');
		} else {
			game.strict = false;
			console.log('Strict mode OFF');
			$('#strict').css('background-color', '#888800');
		}
	}
});

$('#start').click(function() {
	if (power) game.start();
});

//On mouse down of quadrant, sound starts playing, color changes to brighter version and the color
//pressed gets pushed to the game's player array. See mouse up listener for rest of player's move UI
$('.quad').mousedown(function() {
	//hitting the quadrant colors should only do something if it is the player's turn to go
	if (game.playerTurn) {
		clearTimers();
		var color = $(this).attr('id');
		display(color);
		game.player.push(color);
	}
});

//At mouse up, for the UI we stop playing the sound, change color back to the non-pressed version.
//Mouse up will also trigger the games method for checking whether gameover or good move.
$('.quad').mouseup(function() {
	var color = $(this).attr('id');
	returnStatic(color);
	if (game.playerTurn) {
		game.checkMove();
	}
});


//Defining the game object constructor
function Game() {
	var comp = [];//track random computer moves
	this.player = [];//track players moves, reset after every round
	var speed = 1500; //start out at 1.5 second and speed up as level increases to .8
	var count = 0; //this will represent the level as well as the count for how many moves computer makes
	var on = false; //set to true when start is clicked so we know game is in progress, turning game off will take care of setting back to false
	var totalLevels = 20; //total number of levels before winning
	this.strict = false; //strict mode is set to off by default, must be turned on

	//public boolean for whether it is the player's turn
	this.playerTurn = false;

	var obj = this; //use obj to access this object's public properties from within this object's private functions

	this.start = function() {
		if (!on) {
			console.log('start game');
			on = true;
			compMove();
		}
	}

	this.reset = function() {
		returnStatic('green');
		returnStatic('red');
		returnStatic('yellow');
		returnStatic('blue');
		$('#count span').text('--');
		comp = [];
		obj.player = [];
		speed = 1500;
		count = 0;
		obj.playerTurn = false;
		timers.push(setTimeout(function() {
			compMove();
		}, 2000)); //wait 2 seconds before restarting game
	}

	this.checkMove = function() {
		var good = true;
		for (var i = 0; i < obj.player.length; i++) {
			if (obj.player[i] !== comp[i]) {
				console.log('Player made the wrong selection.');
				good = false;
				break;
			}
		}
		//if an error was made...
		//else if no error AND if player has made same total moves as the computer on this turn
		//else if the move was good but player still needs to enter move, set the timer again
		if (!good) {
			obj.playerError();
		} else if (good && obj.player.length === comp.length) {
			//if move was good and count at 20, winner!!!!
			if (count === totalLevels) return winner();
			//first reset the player property so empty for next turn
			obj.player = [];
			//turn off player's turn since it will now be computer's turn to move
			obj.playerTurn = false;
			//clear the timer function from the clock
			clearTimers();
			compMove();
		} else if (good) {
			timers.push(setTurnTimer());
		}
	}

	//Computer move order of events:
	//First run function to choose random color (of the 4) and push that random color to the comp private var
	//Output the comp's current array in the form of the colors lighting and audio feadback, faster if level is higher
	//Switch the public playerTurn property to true
	function compMove() {
		var move = getRandomColor();
		comp.push(move);
		count++;
		displayMove();
		speed = speed - 35; //level 1 is 1.5 second delay and speeds up to a .8 second delay at level 20
	}

	function getRandomColor() {
		var random = Math.floor(Math.random() * 4) + 1;
		switch (random) {
			case 1:
				return 'green';
				break;
			case 2:
				return 'red';
				break;
			case 3:
				return 'yellow';
				break;
			case 4:
				return 'blue';
				break;
		}
	}

	//this function will play back the computers move list for the player to copy as well as increment the round counter
	function displayMove() {
		clearTimers();
		var i = 0;
		function loop() {
			display(comp[i]);
			timers.push(setTimeout(function() {
				returnStatic(comp[i - 1]);
			}, speed - 200)); //speed minus 200 milliseconds creates a gap between flashes if same color is shown multiple times in a row
			i++;
			if(i < comp.length)
				timers.push(setTimeout(loop, speed)); //stored within the timers global array so that timer can be cleared when power turns off
		}
		timers.push(setTimeout(loop, speed)); //stored within the timers global array so that timer can be cleared when power turns off

		//using timeout function so that counter updates right when first comp move is displayed
		timers.push(setTimeout(function() {
			if (count < 10) $('#count span').text('0'+count);
			else $('#count span').text(count);
		}, speed));

		//timeout function used to change back to players turn after all comp moves displayed
		timers.push(setTimeout(function() {
			obj.playerTurn = true;
			console.log("It is now the player's turn to move");
			timers.push(setTurnTimer());
		}, (comp.length + 1) * speed)); //(comp.length + 1) * speed because otherwise player is allowed to move while last color displaying

		console.log(speed);
	}

	
	//this will run when logic detects that player made wrong move, if strict mode is on then it's game over
	this.playerError = function() {
		errorAudio.play();
		if (this.strict) gameover();
		else {
			clearTimers();
			obj.playerTurn = false;
			obj.player = [];
			timers.push(setTimeout(function() {
				displayMove();
			}, 1000)); //add extra 1 second delay before displaying comp moves again
		}
	}

	function gameover() {
		clearTimers();
		//add UI effect here for gameover before the game is reset
		displayResults('LOSE');
	}

	function winner() {
		clearTimers();
		//add UI effects for winning
		displayResults('WIN');
	}

	function displayResults(result) {
		$('#count span').text(result);
		var dim = window.setInterval(function() {
			$('#count span').css('color', '#430710');
			timers.push(window.setTimeout(function() {
				$('#count span').css('color', '#DC0D29');
			}, 500));
		}, 1000);
		timers.push(dim);
		timers.push(window.setTimeout(function() {window.clearInterval(dim); obj.reset();}, 5000));
	}
}
