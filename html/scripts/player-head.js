/* global jsGFwk*/
var PlayerHead = function(player, head) {
	this.head = head;
	this.player = player;
	this.inverted = head.inverted ? -1 : 1;
	this.angle = 0;
	
	this._headPositions = [
		{x: 88, y: 9, angle: 0},
		{x: 79, y: 19, angle: -10},
		{x: 70, y: 30, angle: -15},
		{x: 62, y: 43, angle: -20},
		{x: 55, y: 55, angle: -25},
		{x: 48, y: 69, angle: -30},
		{x: 42, y: 83, angle: -32},
		{x: 36, y: 98, angle: -34},
	];
};

PlayerHead.prototype.draw = function draw(ctx) {
	this.angle++;
	var currentFrame = this.player.currentFrame;
	var headPosition = this._headPositions[currentFrame];
	if (headPosition) {
		ctx.save();
		ctx.translate(this.player.x + headPosition.x * this.inverted, this.player.y + headPosition.y);
		ctx.rotate(jsGFwk.Effects.degreeToRadians(headPosition.angle) * this.inverted);
		ctx.translate(-44, -70);
		ctx.drawImage(this.head.image, 0, 0);
		ctx.restore();
	}
};

