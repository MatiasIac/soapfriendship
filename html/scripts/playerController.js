/*global players, keyMap, jsGFwk, button, buttonHeight, util*/


var playerController = {	

	id: "playerController",
	visible: false,
	init: function () {
		this.prisonerHeads = GlobalPriosionerHeads;
		players.clearAll();
		players.cloneObject({ actionKey: keyMap.A,
			name: "Player 1",
			x: 10, y: 100,
			imageCollection: jsGFwk.Sprites.prisoner1,
			buttonSettings:  {
				x: 50,
				y: buttonHeight,
				id: "key1",
				name: "A"
			},
			head: this.prisonerHeads.normal
		});
		
		if (selectedPlayers.player2) {
			players.cloneObject({ actionKey: keyMap.F,
				name: "Player 2",
				x: 155, y: 85,
				imageCollection: jsGFwk.Sprites.prisoner2,
				buttonSettings:  {
					x: 200,
					y: buttonHeight,
					id: "key2",
					name: "F"
				},
				head: this.prisonerHeads.normal2
			});
		}
		
		if (selectedPlayers.player3) {
			players.cloneObject({ actionKey: keyMap.NUM4,
				name: "Player 3",
				x: 360, y: 90,
				imageCollection: jsGFwk.Sprites.prisoner3,
				buttonSettings:  {
					x: 350,
					y: buttonHeight,
					id: "key3",
					name: "NUM4"
				},
				head: this.prisonerHeads.mirror
			});
		}
		
		
		players.cloneObject({ actionKey: keyMap.NUM6,
			name: "Player 4",
		 	x: 500, y: 100,
			imageCollection: jsGFwk.Sprites.prisoner4,
			buttonSettings:  {
				x: 500,
				y: buttonHeight,
				id: "key4",
				name: "NUM6"
			},
			head: this.prisonerHeads.mirror2
		});
	},
	update: function (delta) {
	}
};