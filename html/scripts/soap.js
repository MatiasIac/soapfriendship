var soap = {
	id: "soap",
	visible: true,
	x: 11, y: 400,
	sizePorcentege: 0.5,
	soapSpeed: 1, soapDirection: 1,
	soapTimer: {},
	init: function () {
		var self = this;
		
		this.particles1 = new cParticleEmitter();
		this.particles1.init({ image: jsGFwk.ResourceManager.graphics.bubble.image});
		this.particles1.position.y = this.y;
		this.particles1.position.x = this.x;
		this.particles1.positionRandom.x = 0;
		this.particles1.maxParticles = 20;
		this.particles1.size = 10;
		this.particles1.sizeRandom = 5;
		this.particles1.lifeSpan = 0.5;
		
		this.soapTimer = new jsGFwk.Timer({
			action: function () {
			   self.x += (self.soapSpeed * self.soapDirection);
			   if (self.x > 600 || self.x < 10) {
				self.soapDirection *= -1;
			   }
			}, 
			tickTime: 0.01
		});
	},
	update: function (delta) {
		this.soapTimer.tick(delta);
		this.particles1.position.x = this.x;
		this.particles1.update(delta);
	},
	draw: function (context) {
		context.save();
			this.particles1.renderParticles(context);
			context.drawImage(jsGFwk.ResourceManager.graphics.loadingSoap.image,
				this.x, this.y, 73 * this.sizePorcentege, 39 * this.sizePorcentege);			
		context.restore();
	}
};