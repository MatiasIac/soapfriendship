var introAnim = {
	id: "introAnim",
	soapApproachTimer: {}, soapX: 0, soapY: 500, segment: 0,
	visible: true, angle: 0,
	init: function () {
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
	},
	draw: function (context) {
		context.save();
			context.drawImage(jsGFwk.ResourceManager.graphics.animBackground.image, 0, 0);
			this.particle.renderParticles(context);
			context.drawImage(jsGFwk.ResourceManager.graphics.animSoap.image, this.soapX, this.soapY);
		context.restore();
	},
};