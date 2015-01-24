var playerController = {
	id: "playerController",
	visible: false,
	init: function () { 
		players.cloneObject({ actionKey: keyMap.A});
		players.cloneObject({ actionKey: keyMap.F});
	},
	update: function (delta) {
	}
};