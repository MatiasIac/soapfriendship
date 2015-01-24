var soap = {
	id: "soap",
	visible: true,
	x: 0, y: 0,
	sizePorcentege: 1,
	init: function () {
		var self = this;
		
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
	},
	update: function (delta) {
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