/*global players, keyMap, jsGFwk*/
var playerController = {
	id: "playerController",
	visible: false,
	init: function () {
		players.clearAll();
		players.cloneObject({ actionKey: keyMap.A,
			name: "Player 1",
			x: 50, y: 100,
			imageCollection: jsGFwk.Sprites.player,
			buttonSettings:  {
				x: 50,
				y: 200,
				id: "key1"
			}
		});
		players.cloneObject({ actionKey: keyMap.F,
			name: "Player 2",
		 	x: 200, y: 80,
			imageCollection: jsGFwk.Sprites.player,
			buttonSettings:  {
				x: 200,
				y: 200,
				id: "key2"
			}
		});
		players.cloneObject({ actionKey: keyMap.J,
			name: "Player 3",
		 	x: 350, y: 80,
			imageCollection: jsGFwk.Sprites.player,
			buttonSettings:  {
				x: 350,
				y: 200,
				id: "key3"
			}
		});
		players.cloneObject({ actionKey: keyMap.L,
			name: "Player 4",
		 	x: 500, y: 100,
			imageCollection: jsGFwk.Sprites.player,
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