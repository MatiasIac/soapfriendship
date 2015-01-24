/*global players, keyMap, jsGFwk*/
var playerController = {
	id: "playerController",
	visible: false,
	init: function () {
		players.clearAll();
		players.cloneObject({ actionKey: keyMap.A,
			name: "Player 1",
			x: 50, y: 100,
			imageCollection: jsGFwk.Sprites.prisoner1,
			buttonSettings:  {
				x: 50,
				y: 200,
				id: "key1",
				name: "A"
			},
			head: jsGFwk.Sprites.head1
		});
		players.cloneObject({ actionKey: keyMap.F,
			name: "Player 2",
		 	x: 200, y: 80,
			imageCollection: jsGFwk.Sprites.prisoner2,
			buttonSettings:  {
				x: 200,
				y: 200,
				id: "key2",
				name: "F"
			},
		 	head: jsGFwk.Sprites.head1
		});
		players.cloneObject({ actionKey: keyMap.NUM4,
			name: "Player 3",
		 	x: 350, y: 80,
			imageCollection: jsGFwk.Sprites.prisoner3,
			buttonSettings:  {
				x: 350,
				y: 200,
				id: "key3",
				name: "NUM4"
			},
			head: jsGFwk.Sprites.head2
		});
		players.cloneObject({ actionKey: keyMap.NUM6,
			name: "Player 4",
		 	x: 500, y: 100,
			imageCollection: jsGFwk.Sprites.prisoner4,
			buttonSettings:  {
				x: 500,
				y: 200,
				id: "key4",
				name: "NUM6"
			},
			head: jsGFwk.Sprites.head2
		});
	},
	update: function (delta) {
	}
};