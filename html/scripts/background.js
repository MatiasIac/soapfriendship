/*global jsGFwk*/
var background = {
	id: "background",
	visible: true,
	update: function (delta) {
	},
	draw: function(ctx) {
		ctx.save();
		ctx.drawImage(jsGFwk.ResourceManager.graphics.showers.image, 0, 0);
		ctx.restore();
	}
};