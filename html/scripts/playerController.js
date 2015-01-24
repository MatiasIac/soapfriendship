var playerController = {
	id: "playerController",
	visible: false,
	init: function () { 
		players.cloneObject({ actionKey: keyMap.A,
			x: 50, y: 100,
			imageCollection: jsGFwk.Sprites.dummy });
		players.cloneObject({ actionKey: keyMap.F,
			x: 200, y: 80,
			imageCollection: jsGFwk.Sprites.dummy });
		players.cloneObject({ actionKey: keyMap.J,
			x: 350, y: 80,
			imageCollection: jsGFwk.Sprites.mirroredPlayer });
		players.cloneObject({ actionKey: keyMap.L,
			x: 500, y: 100,
			imageCollection: jsGFwk.Sprites.mirroredPlayer });
	},
	update: function (delta) {
	}
};