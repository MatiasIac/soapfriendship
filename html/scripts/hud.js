var hud = {
	id: "hud",
	mouseClickId: 0,
	fakeMouse: { x: 0, y: 0, width: 1, height: 1 },
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
		
		this.particles = new cParticleEmitter();
		this.particles.init();
		this.particles.position.y = 430;
		this.particles.position.x = 10;
		this.particles.positionRandom.x = 0;
		this.particles.maxParticles = 10;
		this.particles.size = 150;
		this.particles.sizeRandom = 5;
		this.particles.angle = 0;
		this.particles.gravity.x = 0;
		this.particles.lifeSpan = 2;
		this.particles.speed = 0;
	},
	update: function (delta) {
		this.particles.update(delta);
	},
	draw: function (context) {
		context.save();
			context.drawImage(jsGFwk.ResourceManager.graphics.splash.image, 0, 60);
			this.particles.renderParticles(context);
		context.restore();
	}
};