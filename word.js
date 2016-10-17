var letter = require ('./letter.js')

function Word (value){ //holds on to randomly generated word
	//value is The word we want our users to guess
	this.value = value;
	//an array of Letter objects that represents our word

	this.letters = value.split('').map(function(v){ // split gives an array back
		return new letter (v);
//     .split('').map(l => new Letter)
	});
}

Word.prototype.show = function () { //use (call) show to update screen
	//Takes Letters, calls .show on each one ,
	// collects them into a new array, 
	//calls .join to return a string. 
	return this.letters.map(function(v){return v.show();}).join('');

}

//Modify any correctly guessed letter to set visible to true
//then it will return true or false depending on if a correct letter was guessed

Word.prototype.guess = function(guess){
	this.letters.map(function(l){ // l is a letter objects
		console.log(l);
		if (guess === l.value) {
			l.visible = true;// manipulates object *** l should look like orange function (l)?***
		}
		else { return false;
		}
	})
	.some(function(v){  // opposite of .some is .every in which every value must be true
		return v;
	});
}
//return true or false depending on if the word has been completely guessed.
Word.prototype.finished = function (){
return this.show() === this.value;

}
module.exports = Word;