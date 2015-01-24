/* global jsGFwk*/
var PlayerHead = function(player, head) {
	this.head = head;
	this.player = player;
	this.inverted = head.inverted ? -1 : 1;
	this.angle = 0;
	
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

PlayerHead.prototype.draw = function draw(ctx) {
	this.angle++;
	var currentFrame = this.player.currentFrame;
	var headPosition = this._headPositions[currentFrame];
	if (headPosition) {
		ctx.save();
		ctx.translate(this.player.x + (this.inverted === 1 ? headPosition.x : - headPosition.x + 160), this.player.y + headPosition.y);
		ctx.rotate(jsGFwk.Effects.degreeToRadians(headPosition.angle) * this.inverted);
		ctx.translate(-36, -70);
		ctx.drawImage(this.head.image, 0, 0);
		ctx.restore();
	}
};

