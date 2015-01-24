var util = (function() {
	
	var wrap = function wrap(value, min, max) {
		value = Math.max(value, min);
		value = Math.min(value, max);
		return value;
	};
	
	var makeAtlas = function(width, height, frames, inverted) {
		var spriteCollection = [];
		var newFrame;
		for (var i = 0; i < frames; i++) {
			newFrame = {left: width * i, top: 0, width: width, height: height, inverted: inverted};
			spriteCollection.push(newFrame);
		}
		return spriteCollection;
	};
	
	
	return {
		wrap: wrap,
		makeAtlas: makeAtlas
	};
	
}());