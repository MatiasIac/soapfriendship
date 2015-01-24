var playerController = {
	id: "playerController",
	visible: false,
	init: function () { 
		players.cloneObject({ actionKey: keyMap.A,
			x: 10, y: 100,
			imageCollection: jsGFwk.ResourceManager.graphics.placeholder });
		players.cloneObject({ actionKey: keyMap.F,
			x: 150, y: 100,
			imageCollection: jsGFwk.ResourceManager.graphics.placeholder });
		players.cloneObject({ actionKey: keyMap.J,
			x: 250, y: 100,
			imageCollection: jsGFwk.ResourceManager.graphics.placeholder });
		players.cloneObject({ actionKey: keyMap.L,
			x: 350, y: 100,
			imageCollection: jsGFwk.ResourceManager.graphics.placeholder });
	},
	update: function (delta) {
	}
};