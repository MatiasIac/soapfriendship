var GameOverScreen = function () {
	this.id = "gameOverScreen";
	this.winner = null;
	this.visible = true;
	this.fakeMouse = { x: 1, y: 1, width: 1, height: 1};
	this.retryButton = { x: 100, y: 400, width: 60, height: 49};
	this.mainMenuButton = { x: 450, y: 400, width: 60, height: 49};
	this.mouseClickId = -1;
};

GameOverScreen.prototype.init = function() {
	var self = this;
	jsGFwk.Collisions.onObjectCreated(this.fakeMouse);
	jsGFwk.ResourceManager.sounds.shower.audio.pause();
	
	this.mouseClickId = jsGFwk.IO.mouse.registerClick(function (coord) {
		self.fakeMouse.x = coord.x;
		self.fakeMouse.y = coord.y;
		if (self.fakeMouse.isRectColliding(self.retryButton)) {
			jsGFwk.IO.mouse.unregisterClick(self.mouseClickId);
			jsGFwk.Scenes.scenes.game.enable();
		}
		
		if (self.fakeMouse.isRectColliding(self.mainMenuButton)) {
			jsGFwk.IO.mouse.unregisterClick(self.mouseClickId);
			jsGFwk.Scenes.scenes.hud.enable();
		}
	});
};

GameOverScreen.prototype.update = function(delta) {

};

GameOverScreen.prototype.draw = function(ctx) {
	ctx.save();
		switch (this.winner.name) {
			case "Player 1":
				ctx.drawImage(jsGFwk.ResourceManager.graphics.gameover1.image, 0, 0);
				break;
			case "Player 2":
				ctx.drawImage(jsGFwk.ResourceManager.graphics.gameover2.image, 0, 0);
				break;
			case "Player 3":
				ctx.drawImage(jsGFwk.ResourceManager.graphics.gameover3.image, 0, 0);
				break;
			case "Player 4":
				ctx.drawImage(jsGFwk.ResourceManager.graphics.gameover4.image, 0, 0);
				break;
			default:
				ctx.drawImage(jsGFwk.ResourceManager.graphics.gameover1.image, 0, 0);
				break;
		}
		ctx.fillStyle = "black";
		ctx.font = "35pt zxBold";

		
		ctx.textAlign = "center";

		ctx.fillText("Retry?", 130, 380);
		ctx.drawImage(jsGFwk.Sprites.button.spriteBag[1].image, 100, 400);
		
		ctx.fillText("Main Menu", 480, 380);
		ctx.drawImage(jsGFwk.Sprites.button.spriteBag[1].image, 450, 400);
		
		if (this.winner) {	
			ctx.fillText(this.winner.name + " wins... new friends!", 320, 40);	
		}
	ctx.restore();

	
	
};


var gameOverScreen = new GameOverScreen();