var StartGameTimer = function (stage, ticksPerStage, gameStartCallback) {
	var self = this;
	this.id = "timer";
	this.stage = stage || 5;
	ticksPerStage = ticksPerStage|| 10;
	this.visible = true;
	this.gameStartCallback = gameStartCallback || function() {};
	this.gameStartTimer = new jsGFwk.Timer({
		action: function () {
			self.stage--;
			if (self.stage < 1) {
				self.gameStartCallback();
				self.visible = false;
				self.destroy();
			}
		}, 
			tickTime: ticksPerStage
		});
};

StartGameTimer.prototype.update = function(delta) {
	this.gameStartTimer.tick(1);
};

StartGameTimer.prototype.init = function() {
	
};

StartGameTimer.prototype.draw = function(ctx) {
	ctx.fillStyle = "black";
	ctx.font = "24pt zxBold";
	ctx.fillText(this.stage, 320, 240);
	ctx.restore();
};

StartGameTimer.prototype.destroy = function() {

}
