/* global jsGFwk*/
var PlayerHead = function(player, head) {
	this.head = head;
	this.player = player;
	this.inverted = head.idle1.spriteBag[0].inverted ? 1 : -1;
	this.angle = 0;
	this.animate = true;
	this._headPositions = [
		{x: 88, y: 6, angle: 0},
		{x: 79, y: 16, angle: -1},
		{x: 70, y: 27, angle: -2},
		{x: 62, y: 40, angle: -3},
		{x: 55, y: 52, angle: -3},
		{x: 48, y: 66, angle: -4},
		{x: 42, y: 80, angle: -4},
		{x: 36, y: 95, angle: -4},
	];
};


PlayerHead.prototype.checkWin = function() {

	
};

PlayerHead.prototype.selectAnimation = function() {
	var random = Math.random();
	var animation;
	if (random < 0.95) {
		animation = this.head.idle1;	
	} else if (random < 0.97) {
		animation = this.head.blink1;	
	} else if (random < 0.985) {
		animation = this.head.look1;
	} else if (random < 0.99) {
		animation = this.head.look2;
	} else {
		animation = this.head.look3;
	}
	this.animation = animation;
	this.animationFrame = 0;
	this.onAnimationEnd = this.selectAnimation;
	return animation;
};

PlayerHead.prototype.init = function() {
	this.selectAnimation();
	var self = this;
	this.animationTimer = new jsGFwk.Timer({
		action: function () {
			if (!self.animate) {
				return;	
			}
			if (self.animationFrame === self.animation.spriteBag.length - 1 && self.onAnimationEnd) {
				self.onAnimationEnd();	
			} else {
				self.animationFrame = (self.animationFrame + 1) % self.animation.spriteBag.length;
			}
		},
		//Player ducking speed. Recommended: 5
		tickTime: 0.08
	});	
	
};

PlayerHead.prototype.update = function(delta) {
	this.animationTimer.tick(delta);
};

PlayerHead.prototype.draw = function draw(ctx) {
	

	this.angle++;
	var currentFrame = this.player.currentFrame;
	var headPosition = this._headPositions[currentFrame];
	if (headPosition) {
		ctx.save();
		ctx.translate(this.player.x + (this.inverted === 1 ? headPosition.x : - headPosition.x + 160), this.player.y + headPosition.y);
		ctx.rotate(jsGFwk.Effects.degreeToRadians(headPosition.angle) * this.inverted);
		ctx.translate(-36, -70);
		ctx.drawImage(this.animation.spriteBag[this.animationFrame].image, 0, 0);
		ctx.restore();
	}
};

