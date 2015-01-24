var hud = {
	id: "hud",
	mouseClickId: 0,
	fakeMouse: { x: 0, y: 0, width: 1, height: 1 },
	soapApproachTimer: {}, soapY: 500,
	visible: true,
	init: function () {
		var self = this;
		jsGFwk.Collisions.onObjectCreated(this.fakeMouse);
		
		this.mouseClickId = jsGFwk.IO.mouse.registerClick(function (coord) {
			self.fakeMouse.x = coord.x;
			self.fakeMouse.y = coord.y;
			jsGFwk.IO.mouse.unregisterClick(self.mouseClickId);
			jsGFwk.Scenes.scenes.game.enable();
		});
		
		this.particles1 = new cParticleEmitter();
		this.particles1.init({ image: jsGFwk.ResourceManager.graphics.bubble.image});
		this.particles1.position.y = 450;
		this.particles1.position.x = 100;
		this.particles1.positionRandom.x = 100;
		this.particles1.positionRandom.y = 100;
		this.particles1.maxParticles = 100;
		this.particles1.size = 80;
		this.particles1.sizeRandom = 5;
		this.particles1.angle = 0;
		this.particles1.gravity.x = 0;
		this.particles1.lifeSpan = 4;
		//this.particles.speed = 0;
		
		this.particles2 = new cParticleEmitter();
		this.particles2.init({ image: jsGFwk.ResourceManager.graphics.bubble.image});
		this.particles2.position.y = -30;
		this.particles2.position.x = 400;
		this.particles2.positionRandom.x = 100;
		this.particles2.positionRandom.y = 100;
		this.particles2.maxParticles = 100;
		this.particles2.size = 80;
		this.particles2.sizeRandom = 5;
		this.particles2.angle = 0;
		this.particles2.gravity.x = -0.01;
		this.particles2.gravity.y = 0.1;
		this.particles2.lifeSpan = 4;
		
		this.soapApproachTimer = new jsGFwk.Timer({
			action: function () {
			   self.soapY -= 1;
			}, 
			tickTime: 0.1
		});
	},
	update: function (delta) {
		this.particles1.update(delta);
		this.particles2.update(delta);
		
		if (this.soapY > 111) {
			this.soapApproachTimer.tick(delta);
		}
	},
	draw: function (context) {
		context.save();
			context.drawImage(jsGFwk.ResourceManager.graphics.hubBackground.image, 0, 0);
			context.drawImage(jsGFwk.Sprites.hudBar.image, 200, 322);
			this.particles1.renderParticles(context);
			context.drawImage(jsGFwk.Sprites.hudSoap.image, 118, this.soapY);
			context.drawImage(jsGFwk.Sprites.hudSoapText.image, 100, 50);
			context.drawImage(jsGFwk.Sprites.hudSoapText2.image, 50, 80);
			this.particles2.renderParticles(context);
		context.restore();
	}
};