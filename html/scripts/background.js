/*global jsGFwk*/
var background = {
	id: "background",
	visible: true,
	
	setParticle: function (p) {
		p.gravity.x = 0;
		p.gravity.y = 0.5;
		p.positionRandom.x = 30;
		p.maxParticles = 20;
		p.size = 15;
		p.sizeRandom = 5;
		p.lifeSpan = 0.5;
		p.startColour = [51, 153, 255, 1];
		p.finishColour = [183, 219, 255, 0.5];
	},
	
	init: function () {
		if (jsGFwk.ResourceManager.sounds.musica.audio.paused) {
			jsGFwk.ResourceManager.sounds.musica.audio.volume = 0.2;
			jsGFwk.ResourceManager.sounds.musica.audio.loop = true;
			jsGFwk.ResourceManager.sounds.musica.audio.currentTime = 0;
			jsGFwk.ResourceManager.sounds.musica.audio.play();
		}
	
		this.particles = new cParticleEmitter();
		this.particles.init();
		this.particles.position.y = 27;
		this.particles.position.x = 70;
		this.setParticle(this.particles);
		
		this.particles2 = new cParticleEmitter();
		this.particles2.init();
		this.particles2.position.y = 27;
		this.particles2.position.x = 215;
		this.setParticle(this.particles2);
		
		this.particles3 = new cParticleEmitter();
		this.particles3.init();
		this.particles3.position.y = 27;
		this.particles3.position.x = 438;
		this.setParticle(this.particles3);
		
		this.particles4 = new cParticleEmitter();
		this.particles4.init();
		this.particles4.position.y = 27;
		this.particles4.position.x = 574;
		this.setParticle(this.particles4);
	},
	update: function (delta) {
		this.particles.update(delta);
		this.particles2.update(delta);
		this.particles3.update(delta);
		this.particles4.update(delta);
	},
	draw: function(ctx) {
		ctx.save();
			ctx.drawImage(jsGFwk.ResourceManager.graphics.showers.image, 0, 0);
			this.particles.renderParticles(ctx);
			this.particles2.renderParticles(ctx);
			this.particles3.renderParticles(ctx);
			this.particles4.renderParticles(ctx);
		ctx.restore();
	}
};