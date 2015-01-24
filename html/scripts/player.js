/* global jsGFwk, util, console, Button, players, PlayerHead, gameOverScreen*/


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
		self.button = new Button(bs.x, bs.y, jsGFwk.Sprites.button, bs.id, bs.name);
		self.head = new PlayerHead(self, settings.head);
		self.enabled = false;
		self.name = settings.name;
		self.currentFrame = 0;
		console.log(self.currentImageCollection.spriteBag);
		
		this.temptationApproachTimer = new jsGFwk.Timer({
			action: function () {
	 			self.soapTemptationMeter = util.wrap(self.soapTemptationMeter - 3, 0, 99);
			},
			//Player ducking speed. Recommended: 5
			tickTime: 4
		});
	},
	updateStates: {
		enabled: function enabled(delta) {
			var actionKeyPressed = jsGFwk.IO.keyboard._activeKey[this.actionKey];
			if (!this.wasActionKeyPressed && actionKeyPressed) {
				this.soapTemptationMeter = util.wrap(this.soapTemptationMeter + 5, 0, 99);
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
			
			if (this.soapTemptationMeter <= 0) {
				gameOverScreen.winner = this;
				//jsGFwk.Scenes.scenes.gameOver.enable();
				//players.clearAll();
			}
			
		},
		
		idle: function() {
		
		}
	},
	onUpdate: function (delta) {
		var state = this.enabled ? "enabled" : "idle";
		this.updateStates[state].call(this, delta);
	},
	onDraw: function (ctx) {
		this.currentFrame = parseInt((99 - this.soapTemptationMeter) / 100 * this.spriteBag.length);
		var currentImage = this.spriteBag[this.currentFrame];
		ctx.save();
		ctx.fillStyle = "black";
		ctx.font = "24pt zxBold";
		ctx.fillText(this.soapTemptationMeter, this.x, this.y);
		ctx.drawImage(currentImage.image, this.x, this.y);
		ctx.restore();

		this.head.draw(ctx);
		if (this.button) {
			this.button.onDraw(ctx);
		}
	}
};