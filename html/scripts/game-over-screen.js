var GameOverScreen = function () {
	this.id = "gameOverScreen";
	this.winner = null;
	this.visible = true;
};

GameOverScreen.prototype.init = function() {
	console.log("GameOver!");
};

GameOverScreen.prototype.update = function(delta) {

};

GameOverScreen.prototype.draw = function(ctx) {
	ctx.fillStyle = "black";
	ctx.font = "24pt zxBold";
	if (this.winner) {
		if (this.winner) {
			ctx.fillText(this.winner.name + " wins!", 320, 240);	
		}
		
		
	}
	
	ctx.restore();
	
};


var gameOverScreen = new GameOverScreen();