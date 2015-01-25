/*global jsGFwk */
var util = (function() {
	
	var wrap = function wrap(value, min, max) {
		value = Math.max(value, min);
		value = Math.min(value, max);
		return value;
	};
	
	var makeAtlas = function(width, height, frames, inverted, offset) {
		offset = offset || 0;
		var spriteCollection = [];
		var newFrame;
		for (var i = 0; i < frames; i++) {
			newFrame = {left: width * (i + offset), top: 0, width: width, height: height, inverted: inverted};
			spriteCollection.push(newFrame);
		}
		return spriteCollection;
	};
	
	var createPrisonerHeads = function() {
		
		var headWidth = 80; //used to be 79
		var headHeight = 90;
		var fullAtlas = makeAtlas(headWidth, headHeight, 50, false);
		var fullAtlasMirror = makeAtlas(headWidth, headHeight, 50, true);
		
		var idle1 = makeAtlas(headWidth, headHeight, 4, false);
		var blink1 = makeAtlas(headWidth, headHeight, 10, false);
		var look1 = makeAtlas(headWidth, headHeight, 9, false, 9);
		var look2 = makeAtlas(headWidth, headHeight, 11, false, 19);
		var look3 = makeAtlas(headWidth, headHeight, 13, false, 30);
		var look4 = makeAtlas(headWidth, headHeight, 10, false, 40);
		
		var idle1Mirror = makeAtlas(headWidth, headHeight, 4, true);
		var blink1Mirror = makeAtlas(headWidth, headHeight, 10, true);
		var look1Mirror = makeAtlas(headWidth, headHeight, 9, true, 9);
		var look2Mirror = makeAtlas(headWidth, headHeight, 11, true, 19);
		var look3Mirror = makeAtlas(headWidth, headHeight, 13, true, 30);
		var look4Mirror = makeAtlas(headWidth, headHeight, 10, true, 40);
		
	
		jsGFwk.Sprites.createSpriteCollection("allHeadSprites", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			fullAtlas);
		
		jsGFwk.Sprites.createSpriteCollection("allHeadSpritesMirror", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			fullAtlasMirror);
		
		jsGFwk.Sprites.createSpriteCollection("idle1", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			idle1);
		
		jsGFwk.Sprites.createSpriteCollection("blink1", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			blink1);
		
		jsGFwk.Sprites.createSpriteCollection("look1", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look1);
		
		jsGFwk.Sprites.createSpriteCollection("look2", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look2);
		
		jsGFwk.Sprites.createSpriteCollection("look3", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look3);
		
		jsGFwk.Sprites.createSpriteCollection("look4", 
			jsGFwk.ResourceManager.graphics.headv1.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look4);
		
				jsGFwk.Sprites.createSpriteCollection("idle1Mirror", 
			jsGFwk.ResourceManager.graphics.headv3.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			idle1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("blink1Mirror", 
			jsGFwk.ResourceManager.graphics.headv3.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			blink1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look1Mirror", 
			jsGFwk.ResourceManager.graphics.headv3.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look2Mirror", 
			jsGFwk.ResourceManager.graphics.headv3.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look2Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look3Mirror", 
			jsGFwk.ResourceManager.graphics.headv3.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look3Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look4Mirror", 
			jsGFwk.ResourceManager.graphics.headv3.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look4Mirror);
		
		/** copy & paste */
		
		jsGFwk.Sprites.createSpriteCollection("idle1h2", 
			jsGFwk.ResourceManager.graphics.headv2.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			idle1);
		
		jsGFwk.Sprites.createSpriteCollection("blink1h2", 
			jsGFwk.ResourceManager.graphics.headv2.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			blink1);
		
		jsGFwk.Sprites.createSpriteCollection("look1h2", 
			jsGFwk.ResourceManager.graphics.headv2.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look1);
		
		jsGFwk.Sprites.createSpriteCollection("look2h2", 
			jsGFwk.ResourceManager.graphics.headv2.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look2);
		
		jsGFwk.Sprites.createSpriteCollection("look3h2", 
			jsGFwk.ResourceManager.graphics.headv2.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look3);
		
		jsGFwk.Sprites.createSpriteCollection("look4h2", 
			jsGFwk.ResourceManager.graphics.headv2.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look4);
		
				jsGFwk.Sprites.createSpriteCollection("idle1Mirrorh2", 
			jsGFwk.ResourceManager.graphics.headv4.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			idle1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("blink1Mirrorh2", 
			jsGFwk.ResourceManager.graphics.headv4.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			blink1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look1Mirrorh2", 
			jsGFwk.ResourceManager.graphics.headv4.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look2Mirrorh2", 
			jsGFwk.ResourceManager.graphics.headv4.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look2Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look3Mirrorh2", 
			jsGFwk.ResourceManager.graphics.headv4.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look3Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look4Mirrorh2", 
			jsGFwk.ResourceManager.graphics.headv4.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look4Mirror);
		
		
		return {
			normal: {
				idle1: jsGFwk.Sprites.idle1,
				blink1: jsGFwk.Sprites.blink1,
				look1: jsGFwk.Sprites.look1,
				look2: jsGFwk.Sprites.look2,
				look3: jsGFwk.Sprites.look3,
				look4: jsGFwk.Sprites.look4
			},
			mirror: {
				idle1: jsGFwk.Sprites.idle1Mirror,
				blink1: jsGFwk.Sprites.blink1Mirror,
				look1: jsGFwk.Sprites.look1Mirror,
				look2: jsGFwk.Sprites.look2Mirror,
				look3: jsGFwk.Sprites.look3Mirror,
				look4: jsGFwk.Sprites.look4Mirror	
			},
			normal2: {
				idle1: jsGFwk.Sprites.idle1h2,
				blink1: jsGFwk.Sprites.blink1h2,
				look1: jsGFwk.Sprites.look1h2,
				look2: jsGFwk.Sprites.look2h2,
				look3: jsGFwk.Sprites.look3h2,
				look4: jsGFwk.Sprites.look4h2
			},
			mirror2: {
				idle1: jsGFwk.Sprites.idle1Mirrorh2,
				blink1: jsGFwk.Sprites.blink1Mirrorh2,
				look1: jsGFwk.Sprites.look1Mirrorh2,
				look2: jsGFwk.Sprites.look2Mirrorh2,
				look3: jsGFwk.Sprites.look3Mirrorh2,
				look4: jsGFwk.Sprites.look4Mirrorh2	
			},
		};
	};
	
	var addOggSound = function(source, name) {
		var sources = {};
		sources[jsGFwk.ResourceManager.sounds.format.ogg] = { source: source };
		jsGFwk.ResourceManager.addSound({ name: name, sources: sources});	
	}
	
	return {
		wrap: wrap,
		makeAtlas: makeAtlas,
		createPrisonerHeads: createPrisonerHeads,
		addOggSound: addOggSound 
	};
	
}());