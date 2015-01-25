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
		ctx.fillStyle = "black";
		ctx.font = "24pt zxBold";
		if (this.winner) {	
			ctx.fillText(this.winner.name + " wins!", 320, 240);	
		}
		
		ctx.textAlign = "center";
		ctx.font = "24pt zxBold";

		ctx.fillText("Retry?", 130, 380);
		ctx.drawImage(jsGFwk.Sprites.button.spriteBag[1].image, 100, 400);
		
		ctx.fillText("Main Menu", 480, 380);
		ctx.drawImage(jsGFwk.Sprites.button.spriteBag[1].image, 450, 400);
		
	ctx.restore();
};


var gameOverScreen = new GameOverScreen();