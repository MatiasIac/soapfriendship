var util = (function() {
	
	var wrap = function wrap(value, min, max) {
		value = Math.max(value, min);
		value = Math.min(value, max);
		return value;
	};
	
	
	return {
		wrap: wrap	
	};
	
}());