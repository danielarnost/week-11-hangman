//letter constructor, stores the character provided and 
//sts its initisl visibility to false unless its a space



function Letter (value) {
	//store the character value in the Letter object
	this.value = value;
	//
	this.visible = false //(value === ' ')//letter is not visible because we havent guessed it yet
	//if the letter is a space, visible defaults to true
	//otherwise visible defauts to false
}

Letter.prototype.show = function () {
	//ternary operator below
	return (this.visible) ? this.value : '_';

	//if (this.visible){  same as above return function
	// 	return this.value;
	// }
	// else{
	// 	return '_';
	// }
}
module.exports = Letter;