/* global jsGFwk, util, console, Button*/


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
	button: null,
	onInit: function (settings) {
		var self = this;
		self.actionKey = settings.actionKey;
		self.x = settings.x;
		self.y = settings.y;
		self.currentImage = settings.imageCollection.spriteBag[0];
		self.spriteBag = settings.imageCollection.spriteBag;
		self.currentImageCollection = settings.imageCollection;
		var bs = settings.buttonSettings;
		self.button = new Button(bs.x, bs.y, jsGFwk.Sprites.button, bs.id);
		
		
		console.log(self.currentImageCollection.spriteBag);
		
		this.temptationApproachTimer = new jsGFwk.Timer({
			action: function () {
	 			self.soapTemptationMeter = util.wrap(self.soapTemptationMeter - 1, 0, 99);
			}, 
			tickTime: 5
		});
	},
	
	onUpdate: function (delta) {
		var actionKeyPressed = jsGFwk.IO.keyboard._activeKey[this.actionKey];
		if (!this.wasActionKeyPressed && actionKeyPressed) {
			this.soapTemptationMeter = util.wrap(this.soapTemptationMeter + 1, 0, 99);
			this.wasActionKeyPressed = true;
		}
		if (!actionKeyPressed) {
			this.wasActionKeyPressed = false; 
		}
		this.temptationApproachTimer.tick(1);
		if (this.button) {
			this.button.toggled = actionKeyPressed;	
		}
		if (this.button) {
			this.button.onUpdate(delta);
		}
	},
	onDraw: function (ctx) {
		var currentImage = this.spriteBag[parseInt(this.soapTemptationMeter / 100 * this.spriteBag.length)];
		ctx.save();
		ctx.fillStyle = "black";
		ctx.font = "24pt zxBold";
		ctx.fillText(this.soapTemptationMeter, this.x, this.y);
		ctx.drawImage(currentImage.image, this.x, this.y);
		ctx.restore();
		if (this.button) {
			this.button.onDraw(ctx);
		}
	}
};