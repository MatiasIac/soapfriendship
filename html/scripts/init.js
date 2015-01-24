/*global window, document, player, jsGFwk, keyMap*/
window.onload = function init() {
	jsGFwk.settings.canvas = "canvas";
	jsGFwk.settings.clearColor = "lightpink";
	jsGFwk.settings.frameRate = 1000 / 60;

	jsGFwk.include("FastAnimation");
	jsGFwk.include("Container");
	jsGFwk.include("IO");
	jsGFwk.include("Collisions");
	jsGFwk.include("ResourceManager");
	jsGFwk.include("Sprites");
	jsGFwk.include("Fonts");
	jsGFwk.include("Scenes");
	jsGFwk.include("Path");

	jsGFwk.Fonts.createFont({ name: 'zxBold', source: 'fonts/zxBold.ttf' });
	
	jsGFwk.ResourceManager.addGraphic({	name: "loadingSoap", source: "images/loadingSoap.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "splash", source: "images/splash.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "placeholder", source: "images/rockman-placeholder.png" });

	jsGFwk.createObject({
		id: "progress",
		visible: true,
		barWidth: 0,
		init: function () {
			jsGFwk.ResourceManager.onResourcesLoadedCompleted = function () {
				jsGFwk.Sprites.createSpriteCollection("dummy", 
					jsGFwk.ResourceManager.graphics.placeholder.image, 
					[{left: 5, top: 3, width: 57, height: 86},
					 {left: 67, top: 3, width: 36, height: 91},
					 {left: 156, top: 3, width: 50, height: 93},
					 {left: 212, top: 8, width: 57, height: 90}]);
		  
				players = jsGFwk.Container.createContainer("players", player);

				jsGFwk.Scenes.create({name: "hud", gameObjects: [hud] });
				jsGFwk.Scenes.create({name: "game", gameObjects: [background, playerController, players] });
	
				jsGFwk.Scenes.scenes.hud.enable();
				jsGFwk._gameObjects.progress.destroy();
			};
		},
		update: function (delta) { },
		draw: function (context) {
			context.save();
				context.fillStyle = "black";
				context.fillText("Rubbing..." + parseInt((jsGFwk.ResourceManager._totalLoadedResources * 100) / jsGFwk.ResourceManager._totalResources) + "%", 30, 40);
				context.drawImage(jsGFwk.ResourceManager.graphics.loadingSoap.image,
					300, 200);
			context.restore();
		}
	});
  
	jsGFwk.start();
};