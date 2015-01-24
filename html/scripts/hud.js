var hud = {
	id: "hud",
	mouseClickId: 0,
	fakeMouse: { x: 0, y: 0, width: 1, height: 1 },
	soapApproachTimer: {}, soapX: 0, soapY: 500, segment: 0,
	visible: true,
	//showMano: false,
	init: function () {
		var self = this;
		jsGFwk.Collisions.onObjectCreated(this.fakeMouse);
		
		this.mouseClickId = jsGFwk.IO.mouse.registerClick(function (coord) {
			self.fakeMouse.x = coord.x;
			self.fakeMouse.y = coord.y;
			jsGFwk.IO.mouse.unregisterClick(self.mouseClickId);
			players.clearAll();
			jsGFwk.Scenes.scenes.game.enable();
			
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
		
		this.path.setPath({x: 118, y: 500}, {x: 118, y: 100},
			{x: 320, y: 400}, {x: 800, y: -100});
	},
	update: function (delta) {
		this.particles1.update(delta);
		this.particles2.update(delta);
		
		if (this.segment < 1) {
			this.soapApproachTimer.tick(delta);
		}
	},
	draw: function (context) {
		context.save();
			context.drawImage(jsGFwk.ResourceManager.graphics.hubBackground.image, 0, 0);
			context.drawImage(jsGFwk.Sprites.hudBar.image, 200, 322);
			this.particles1.renderParticles(context);
			//if (this.showMano) {
			//	context.drawImage(jsGFwk.ResourceManager.graphics.mano.image, 118, this.soapY);
			//} else {
				context.drawImage(jsGFwk.Sprites.hudSoap.image, 118, this.soapY);
			//}
			context.drawImage(jsGFwk.Sprites.hudSoapText.image, 100, 50);
			context.drawImage(jsGFwk.Sprites.hudSoapText2.image, 50, 80);
			this.particles2.renderParticles(context);
		context.restore();
	}
};