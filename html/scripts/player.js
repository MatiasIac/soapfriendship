/* global jsGFwk, util, console*/


var player = {
	id: "player",
	visible: true,
	soapTemptationMeter: 99,
	actionKey: -1,
	wasActionKeyPressed: false,
	temptationApproachTimer: { },
	x: 0,
	y: 0,
	currentImage: null, 
	currentImageCollection: null,

		
	onInit: function (settings) {
		var self = this;
		self.actionKey = settings.actionKey;
		self.x = settings.x;
		self.y = settings.y;
		self.currentImage = settings.imageCollection.spriteBag[0];
		self.spriteBag = settings.imageCollection.spriteBag;
		self.currentImageCollection = settings.imageCollection;
		console.log(self.currentImageCollection.spriteBag);
		
		this.temptationApproachTimer = new jsGFwk.Timer({
			action: function () {
	 			self.soapTemptationMeter = util.wrap(self.soapTemptationMeter - 1, 0, 99);
			}, 
			tickTime: 5
		});
	},
	
	onUpdate: function (delta) {
		if (!this.wasActionKeyPressed && jsGFwk.IO.keyboard._activeKey[this.actionKey]) {
			this.soapTemptationMeter = util.wrap(this.soapTemptationMeter + 1, 0, 99);
			this.wasActionKeyPressed = true;
		}
		if (!jsGFwk.IO.keyboard._activeKey[this.actionKey]) {
			this.wasActionKeyPressed = false; 
		}
		this.temptationApproachTimer.tick(1);
	},
	onDraw: function (ctx) {
		console.log('Spritebag: ' + this.spriteBag);
		var currentImage = this.spriteBag[parseInt(this.soapTemptationMeter / 100 * this.spriteBag.length)];
		console.log(currentImage);
		ctx.save();
		ctx.fillStyle = "black";
		ctx.font = "24pt zxBold";
		ctx.fillText(this.soapTemptationMeter, this.x, this.y);
		ctx.drawImage(currentImage.image, this.x, this.y);
		ctx.restore();
	}
};