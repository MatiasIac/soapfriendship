var introAnim = {
	id: "introAnim",
	soapApproachTimer: {}, soapX: 0, soapY: 500, segment: 0,
	visible: true, angle: 0,
	init: function () {
		selectedPlayers.player2 = false;
		selectedPlayers.player3 = false;
		var self = this;
		this.segment = 0;
		this.soapX = 0;
		this.soapY = 500;
		
		this.particle = new cParticleEmitter();
		this.particle.init({ image: jsGFwk.ResourceManager.graphics.bubble.image});
		this.particle.position.y = this.soapY;
		this.particle.position.x = this.soapX;
		this.particle.positionRandom.x = -100;
		this.particle.maxParticles = 80;
		this.particle.size = 50;
		this.particle.sizeRandom = 5;
		this.particle.lifeSpan = 0.5;
		
		this.soapApproachTimer = new jsGFwk.Timer({
			action: function () {
				self.segment += 0.005;
				var point = self.path.getPointAt(self.segment);
				self.soapX = point.x;
				self.soapY = point.y;
				
				if (self.segment > 0.55 &&
					self.segment < 0.555) {
					jsGFwk.ResourceManager.sounds.jabon.audio.play();
				}
				
				if (self.segment >= 1) {
					jsGFwk.Scenes.scenes.game.enable();
				}
			}, 
			tickTime: 0.0001
		});
		
		this.path.setPath({x: -1600, y: 100}, {x: 700, y: 140},
			{x: -1600, y: 100}, {x: 700, y: 140});
	},
	
	update: function (delta) {
		this.soapApproachTimer.tick(delta);
		this.particle.position.x = this.soapX;
		this.particle.position.y = this.soapY + 100;
		this.particle.update(delta);
		
		if (jsGFwk.IO.keyboard._activeKey[keyMap.F]) {
			selectedPlayers.player2 = true;
		}
		
		if (jsGFwk.IO.keyboard._activeKey[keyMap.NUM4]) {
			selectedPlayers.player3 = true;
		}
	},
	draw: function (context) {
		context.save();
			context.textAlign = "center";
			context.fillStyle = "Pink";
			context.strokeStyle = "ligthpink";
			context.font = "30pt zxBold";
		
			context.drawImage(jsGFwk.ResourceManager.graphics.animBackground.image, 0, 0);
			this.particle.renderParticles(context);
			context.drawImage(jsGFwk.ResourceManager.graphics.animSoap.image, this.soapX, this.soapY);
			
			context.drawImage(jsGFwk.Sprites.idle1.spriteBag[0].image, 10, 10);
			
			if (!selectedPlayers.player2) {
				context.drawImage(jsGFwk.Sprites.player2GrayHead.image, 160, 10);
				context.strokeText("F", 200, 120);
				context.fillText("F", 200, 120);
			} else {
				context.drawImage(jsGFwk.Sprites.idle1h2.spriteBag[0].image, 160, 10);
			}
			
			if (!selectedPlayers.player3) {
				context.drawImage(jsGFwk.Sprites.player3GrayHead.image, 360, 10);
				context.strokeText("NUM4", 400, 120);
				context.fillText("NUM4", 400, 120);
			} else {
				context.drawImage(jsGFwk.Sprites.idle1Mirror.spriteBag[0].image, 360, 10);
			}
			
			context.drawImage(jsGFwk.Sprites.idle1Mirrorh2.spriteBag[0].image, 510, 10);			
		context.restore();
	},
};