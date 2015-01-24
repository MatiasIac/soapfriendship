/*global players, keyMap, jsGFwk*/
var playerController = {
	id: "playerController",
	visible: false,
	init: function () {
		players.clearAll();
		players.cloneObject({ actionKey: keyMap.A,
			x: 50, y: 100,
			imageCollection: jsGFwk.Sprites.dummy,
			buttonSettings:  {
				x: 50,
				y: 200,
				id: "key1"
			}
		});
		players.cloneObject({ actionKey: keyMap.F,
			x: 200, y: 80,
			imageCollection: jsGFwk.Sprites.dummy,
			buttonSettings:  {
				x: 200,
				y: 200,
				id: "key2"
			}
		});
		players.cloneObject({ actionKey: keyMap.J,
			x: 350, y: 80,
			imageCollection: jsGFwk.Sprites.mirroredPlayer,
			buttonSettings:  {
				x: 350,
				y: 200,
				id: "key3"
			}
		});
		players.cloneObject({ actionKey: keyMap.L,
			x: 500, y: 100,
			imageCollection: jsGFwk.Sprites.mirroredPlayer,
			buttonSettings:  {
				x: 500,
				y: 200,
				id: "key4"
			}		
		});
	},
	update: function (delta) {
	}
};