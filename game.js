var Word = require('./word.js');

function Game() {
	this.score = 0;
	// this.init();
}
Game.prototype.bank = ["ruby", "diamond", "opal", "amythest", "emerald", "mineral", "quartz"];

Game.prototype.random = function(){
	var userWord = Math.floor(Math.random() * this.bank.length);
	return new Word(this.bank[userWord]); 
};


module.exports = Game;