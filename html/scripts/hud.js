var hud = {
	id: "hud",
	mouseClickId: 0,
	fakeMouse: { x: 0, y: 0, width: 1, height: 1 },
	soapApproachTimer: {}, soapX: 0, soapY: 500, segment: 0,
	flashTimer: {}, transparent: 1,
	visible: true, tapBlink: false, tiltTimer: {}, brilloFlag: false,
	showMano: false, handAngle: 0, handAngleCounter: 0.1,
	init: function () {
		jsGFwk.ResourceManager.sounds.musica.audio.volume = 0.2;
		jsGFwk.ResourceManager.sounds.musica.audio.loop = true;
		jsGFwk.ResourceManager.sounds.musica.audio.currentTime = 0;
		jsGFwk.ResourceManager.sounds.musica.audio.play();
	
		var self = this;
		jsGFwk.Collisions.onObjectCreated(this.fakeMouse);
		
		this.transparent = 1;
		this.segment = 0;
		this.showMano = false;
		this.soapY = 500;
		this.brilloFlag = false;
		
		this.mouseClickId = jsGFwk.IO.mouse.registerClick(function (coord) {
			self.fakeMouse.x = coord.x;
			self.fakeMouse.y = coord.y;
			jsGFwk.IO.mouse.unregisterClick(self.mouseClickId);
			jsGFwk.Scenes.scenes.introAnim.enable();
		});
		
		this.particles1 = new cParticleEmitter();
		this.particles1.init({ image: jsGFwk.ResourceManager.graphics.bubble.image});
		this.particles1.position.y = 450;
		this.particles1.position.x = 100;
		this.particles1.positionRandom.x = 100;
		this.particles1.positionRandom.y = 100;
		this.particles1.maxParticles = 20;
		this.particles1.size = 80;
		this.particles1.sizeRandom = 5;
		this.particles1.angle = 0;
		this.particles1.gravity.x = 0;
		this.particles1.lifeSpan = 4;
		this.particles1.emissionRate = 5;
		
		this.particles2 = new cParticleEmitter();
		this.particles2.init({ image: jsGFwk.ResourceManager.graphics.bubble.image});
		this.particles2.position.y = -30;
		this.particles2.position.x = 400;
		this.particles2.positionRandom.x = 100;
		this.particles2.positionRandom.y = 100;
		this.particles2.maxParticles = 20;
		this.particles2.size = 80;
		this.particles2.sizeRandom = 5;
		this.particles2.angle = 0;
		this.particles2.gravity.x = -0.01;
		this.particles2.gravity.y = 0.1;
		this.particles2.lifeSpan = 4;
		this.particles2.emissionRate = 5;
		
		this.soapApproachTimer = new jsGFwk.Timer({
			action: function () {
				self.segment += 0.01;
				var point = self.path.getPointAt(self.segment);
				self.soapX = point.x;
				self.soapY = point.y;
			}, 
			tickTime: 0.0001
		});
		
		this.flashTimer = new jsGFwk.Timer({
			action: function () {
				self.showMano = true;
				self._drawPointer = self._drawNormalPointer;
				self._updatePointer = self._updateNormal;
			}, 
			tickTime: 0.2
		});
		
		this.tapBlinkTimer = new jsGFwk.Timer({
			action: function () {
				self.tapBlink = !self.tapBlink;
			}, 
			tickTime: 0.5
		});
		
		this.tiltTimer = new jsGFwk.Timer({
			action: function () {
				self.handAngle += self.handAngleCounter;
				if (self.handAngle > 10 || self.handAngle < -10) {
					self.handAngleCounter *= -1;
				}
			},
			tickTime: 0.05
		});
		
		this.path.setPath({x: 118, y: 500}, {x: 118, y: 100},
			{x: 320, y: 400}, {x: 800, y: -100});
			
		this._drawPointer = this._drawNormalPointer;
		this._updatePointer = this._updateNormal;
	},
	
	_updatePointer: function () {},
	_updateNormal: function (delta) {
		this.tapBlinkTimer.tick(delta);
		this.tiltTimer.tick(delta);
		if (this.segment < 1) {
			this.soapApproachTimer.tick(delta);
		} else {
			if (!this.brilloFlag) {
				jsGFwk.ResourceManager.sounds.brillo.audio.play();
				this.brilloFlag = true;
			}
			if (this.transparent >= 0) {
				this.showMano = true;
				this.transparent -= 0.01;
			}
		}
	},
	_updateFlash: function (delta) {
		this.flashTimer.tick(delta);
	},
	
	update: function (delta) {
		this.particles1.update(delta);
		this.particles2.update(delta);
		
		this._updatePointer(delta);
	},
	draw: function (context) {
		this._drawPointer(context);
	},
	
	_drawPointer: function () {	},
	
	_drawFlashPointer: function (context) {
		context.save();
			context.fillStyle = "white";
			context.fillRect(0,0,640,480);
		context.restore();
	},
	
	_drawNormalPointer: function (context) {
		context.save();
			context.drawImage(jsGFwk.ResourceManager.graphics.hubBackground.image, 0, 0);
			this.particles1.renderParticles(context);
			
			if (this.showMano) {
				context.drawImage(jsGFwk.ResourceManager.graphics.cloud.image, 170, 390);
				context.drawImage(jsGFwk.ResourceManager.graphics.light.image, 108, 0);
				context.drawImage(jsGFwk.ResourceManager.graphics.cloud.image, 391, 390);
				
				context.save();
					context.translate(300, 550);
					context.rotate(jsGFwk.Effects.degreeToRadians(this.handAngle));
					context.translate(-200, -500);
					context.drawImage(jsGFwk.ResourceManager.graphics.mano.image, 0, 0);
				context.restore();
				
				context.drawImage(jsGFwk.ResourceManager.graphics.cloud.image, -50, 390);
				
				context.drawImage(jsGFwk.Sprites.hudSoapText.image, 100, 50);
				context.drawImage(jsGFwk.Sprites.hudSoapText2.image, 50, 80);
				
				if (this.tapBlink) {
					context.font = "44pt zxBold";
					context.textAlign = "center";
					context.fillStyle = "white";
					context.fillText("Tap to play", 321, 421);
					context.fillStyle = "black";
					context.fillText("Tap to play", 320, 420);
				}
				
				context.fillStyle = "rgba(255,255,255," + this.transparent + ")";
				context.fillRect(0,0,640,480);
			} else {
				context.drawImage(jsGFwk.Sprites.hudSoap.image, 118, this.soapY);
			}
			
			this.particles2.renderParticles(context);
		context.restore();
	}
};