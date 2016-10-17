
var Game = require('./game.js')
// var letter = require('./letter.js')
// var word = require('./word.js')


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
                return ('Key must be a letter A-Z')
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


// console.log(dan.random())




























