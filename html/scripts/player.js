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
		this.difficulty = 0;
		this.state = "idle";
		this._censorshipOffset = { x: 55, y: [100, 120, 130, 140, 150, 155, 165, 165]};
		var self = this;

		self.timer = 0;
		self.actionKey = settings.actionKey;
		self.x = settings.x;
		self.y = settings.y;
		self.currentImage = settings.imageCollection.spriteBag[0];
		self.spriteBag = settings.imageCollection.spriteBag;
		self.currentImageCollection = settings.imageCollection;
		var bs = settings.buttonSettings;
		self.button = new Button(bs.x, bs.y, jsGFwk.Sprites.button, bs.id, bs.name, this);
		self.head = new PlayerHead(self, settings.head);
		self.head.init();
		self.enabled = false;
		self.name = settings.name;
		self.currentFrame = 0;
		//console.log(self.currentImageCollection.spriteBag);
		
		this.temptationApproachTimer = new jsGFwk.Timer({
			action: function () {
	 			self.soapTemptationMeter = util.wrap(self.soapTemptationMeter - 1 , 0, 99);
			},
			//Player ducking speed. Recommended: 5
			tickTime: 0.1
		});
	},
	updateStates: {
		enabled: function enabled(delta) {
				

			var self = this;
			var actionKeyPressed = jsGFwk.IO.keyboard._activeKey[this.actionKey];

			if (!this.wasActionKeyPressed && actionKeyPressed) {
				this.soapTemptationMeter = util.wrap(this.soapTemptationMeter + 6 / (1 + self.difficulty * 0.2) - 1 / (1 + self.difficulty * 0.2) * this.distanceToSoap / 100, 0, 99);
				this.wasActionKeyPressed = true;
			}
			if (!actionKeyPressed) {
				this.wasActionKeyPressed = false; 
			}
			this.temptationApproachTimer.tick(delta);
			if (this.button) {
				this.button.toggled = actionKeyPressed;	
			}
			if (this.button) {
				this.button.onUpdate(delta);
			}
			
			if (this.soapTemptationMeter <= 0) {
				jsGFwk.ResourceManager.sounds.musica.audio.pause();
			
				gameOverScreen.winner = this;
				
				players.eachCloned(function(player) {
					player.disable();
				});
				this.enable();
				this.head.animation = this.head.head.look4;
				this.head.animationFrame = 0;
				
				jsGFwk.ResourceManager.sounds.voz6.audio.play();
				
				this.head.onAnimationEnd = function() {
					self.head.animate = false;
					new Alarm(1, function endGame() {
						players.clearAll();
						jsGFwk.Scenes.scenes.gameOver.enable();
					});
				};
				this.state = "winAnimation";
			}
			this.head.update(delta);
		},
		
		idle: function() {
		
		},
		
		winAnimation: function(delta) {
			this.head.update(delta);
		}
	
	},
	onUpdate: function (delta) {
		this.difficulty += delta;
		this.distanceToSoap = (jsGFwk._gameObjects.soap.x - this.x - 80);
		this.distanceToSoap = 100 - util.wrap(Math.abs(this.distanceToSoap), 0, 100);
		this.timer += delta * Math.random();
		this.updateStates[this.state].call(this, delta);
	},
	
	enable: function () {
		this.state = "enabled";
	},
	
	disable: function() {
		this.state = "idle";
	},
	
	win: function() {
		this.state = "winAnimation";
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

		ctx.fillRect(this.x + this._censorshipOffset.x + Math.sin(this.timer) * 3, this.y + Math.cos(this.timer) * 3+ this._censorshipOffset.y[this.currentFrame], 50, 25);
		
		this.head.draw(ctx);
		if (this.button) {
			this.button.onDraw(ctx);
		}
	}
};