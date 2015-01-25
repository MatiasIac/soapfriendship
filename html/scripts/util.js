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
		
		var fullAtlas = makeAtlas(79, 89, 50, false);
		var fullAtlasMirror = makeAtlas(79, 89, 50, true);
		
		var idle1 = makeAtlas(79, 89, 4, false);
		var blink1 = makeAtlas(79, 89, 10, false);
		var look1 = makeAtlas(79, 89, 9, false, 9);
		var look2 = makeAtlas(79, 89, 11, false, 19);
		var look3 = makeAtlas(79, 89, 13, false, 30);
		var look4 = makeAtlas(79, 89, 10, false, 40);
		
		var idle1Mirror = makeAtlas(79, 89, 4, true);
		var blink1Mirror = makeAtlas(79, 89, 10, true);
		var look1Mirror = makeAtlas(79, 89, 9, true, 9);
		var look2Mirror = makeAtlas(79, 89, 11, true, 19);
		var look3Mirror = makeAtlas(79, 89, 13, true, 30);
		var look4Mirror = makeAtlas(79, 89, 10, true, 40);
		
		
		jsGFwk.Sprites.createSpriteCollection("allHeadSprites", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			fullAtlas);
		
		jsGFwk.Sprites.createSpriteCollection("allHeadSpritesMirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			fullAtlasMirror);
		
		jsGFwk.Sprites.createSpriteCollection("idle1", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			idle1);
		
		jsGFwk.Sprites.createSpriteCollection("blink1", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			blink1);
		
		jsGFwk.Sprites.createSpriteCollection("look1", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look1);
		
		jsGFwk.Sprites.createSpriteCollection("look2", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look2);
		
		jsGFwk.Sprites.createSpriteCollection("look3", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look3);
		
		jsGFwk.Sprites.createSpriteCollection("look4", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look4);
		
				jsGFwk.Sprites.createSpriteCollection("idle1Mirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			idle1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("blink1Mirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			blink1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look1Mirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look1Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look2Mirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look2Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look3Mirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
			//jsGFwk.ResourceManager.graphics.head1.image,																		
			look3Mirror);
		
		jsGFwk.Sprites.createSpriteCollection("look4Mirror", 
			jsGFwk.ResourceManager.graphics.heads.image,
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
			}
		};
	};
	
	
	return {
		wrap: wrap,
		makeAtlas: makeAtlas,
		createPrisonerHeads: createPrisonerHeads
	};
	
}());