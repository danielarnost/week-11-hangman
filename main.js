
var Game = require('./game.js')
// var letter = require('./letter.js')
// var word = require('./word.js')

//will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
// var Game = require('./game.js');
// var Word = require('./word.js');
var inquirer = require('inquirer');


var dan = new Game();

function Word (name){
	this.name = letter
}

var prompt = function () {
    inquirer.prompt([{
        message: 'Guess a letter',
        type:'input',
        name:'letter',
        validate: function (input) {
            if (!input.match(/[a-z]/i)){
                return ('Please choose only a letter A-Z')
            }
            else{
                return true;
            }

        }
    }])
        .then(function(answers){
            var newGuy = new Word(answers.letter);
        });

};

prompt();


console.log(dan.random())


// var newGame = function () {
//     inquirer.prompt([{
//         message:" Would you like to play another game?",
//         type:'confirm',
//         name: 'restart'
//     }])
//         .then(function(answers){
//             if(answers.restart){
//                 game.init();

//             }
//             else{
//                 process.exit();
//             }
//         });
// };
// newGame();

























// var inquirer = require('inquirer')

// inquirer.prompt([
	



// var prompt = function(){}
// 	{
// 		message: "Guess a letter",
// 		type: "input",
// 		name: "name", 		
// 		choices: ["y", "n" ]
// 	}
// 	{
// 		type: "confirm",
// 		message: "Are you sure:",
// 		name: "confirm",
// 		default: true

// 	}

// ]).then(function (user) {
// if (user.confirm){

// 		console.log("==============================================");
// 		console.log("");
// 		console.log("Welcome " + user.name);
// 		console.log("Your " + user.pokemon + " is ready for battle!");
// 		console.log("");
// 		console.log("==============================================");

	// If the user does not confirm, then a message is provided and the program quits. 
	

// var userGuesses = 10
// var guess = process.argv[2]


// Word();

// Letter();

 
// function checkUserGuess(){
// console.log("_ _ _ _ _ _ _")
// if (userGuesses == 0 ){
// 	console.log("Game Over")
//  }
//  else {
//  	userGuesses --;
//  }
// }


// var wordsList   = ["python", "ruby", "materialize", "lou", "greg", "jordan", "jasmine", "stephen", "jacob", "adam", "rui", "luis"];
// var chosenWord  = "";
// var lettersInChosenWord = [];
// var numBlanks	= 0;
// var blanksAndSuccesses = [];
// var wrongGuesses = [];


// var winCounter  = 0;
// var lossCounter = 0;
// var numGuesses  = 9;

// function startGame() {
// 	numGuesses = 9;
// 	chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
// 	lettersInChosenWord = chosenWord.split("");
// 	numBlanks = lettersInChosenWord.length;

// 	for (var i=0; i <numBlanks; i++){
// 		blanksAndSuccesses.push("_");
// 	}

// 	function checkLetters(letter) {
// 		var letterInWord = false;
// 		for (var i=0; i<numBlanks; i++) {
// 		if(chosenWord[i] == letter) {
// 			letterInWord = true; // if the letter exists then toggle this boolean to true. This will be used in the next step. 
//  		}
// 	}