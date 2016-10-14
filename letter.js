function Letter (value) {
	this.value = value;
	this.visible = false;//letter is not visible because we havent guessed it yet
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
exports = Letter;