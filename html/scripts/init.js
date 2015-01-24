/*global window, document, player, jsGFwk, keyMap, StartGameTimer, hud, background, soap, gameOverScreen, playerController, util */
var players;

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
	jsGFwk.include("Effects");

	jsGFwk.Fonts.createFont({ name: 'zxBold', source: 'fonts/zxBold.ttf' });
	
	jsGFwk.ResourceManager.addGraphic({	name: "loadingSoap", source: "images/loadingSoap.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "hubSprite", source: "images/hudMainSprites.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "hubBackground", source: "images/hudBackground.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "bubble", source: "images/bubuja.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "mano", source: "images/mano.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "button", source: "images/button.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "prisoner", source: "images/prisoner.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "light", source: "images/light.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "cloud", source: "images/cloud.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "animBackground", source: "images/animbackground.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "animSoap", source: "images/animSoap.png" });

	jsGFwk.createObject({
		id: "progress",
		visible: true,
		barWidth: 0,
		init: function () {
			jsGFwk.ResourceManager.onResourcesLoadedCompleted = function () {
				
				
				jsGFwk.Sprites.createSpriteCollection("button", 
					jsGFwk.ResourceManager.graphics.button.image, 
						[{left: 0, top: 0, width: 50, height: 50},
						 {left: 50, top: 0, width: 50, height: 50}]);
				var playerSpritesAtlas = util.makeAtlas(127, 261, 8, false);
				jsGFwk.Sprites.createSpriteCollection("player", 
					jsGFwk.ResourceManager.graphics.prisoner.image,
					playerSpritesAtlas);			
				jsGFwk.Sprites.createSprite({
					id: "hudSoap",
					graphic: jsGFwk.ResourceManager.graphics.hubSprite.image,
					left: 0, top: 0, width: 405, height: 259 });
					
				jsGFwk.Sprites.createSprite({
					id: "hudSoapText",
					graphic: jsGFwk.ResourceManager.graphics.hubSprite.image,
					left: 199, top: 265, width: 196, height: 79 });

				jsGFwk.Sprites.createSprite({
					id: "hudSoapText2",
					graphic: jsGFwk.ResourceManager.graphics.hubSprite.image,
					left: 7, top: 348, width: 463, height: 125 });
					
				jsGFwk.Sprites.createSprite({
					id: "hudBar",
					graphic: jsGFwk.ResourceManager.graphics.hubSprite.image,
					left: 10, top: 477, width: 284, height: 158 });
		  
				players = jsGFwk.Container.createContainer("players", player);
				
				var timer = new StartGameTimer(5, 5, function startCallback() {
					players.eachCloned(function(clone) {
						clone.enabled = true;
					});
				});
								
				jsGFwk.Scenes.create({name: "hud", gameObjects: [hud] });
				jsGFwk.Scenes.create({name: "introAnim", gameObjects: [introAnim] });
				jsGFwk.Scenes.create({name: "game", gameObjects: [background, playerController, players, soap, timer] });	
				jsGFwk.Scenes.create({name: "gameOver", gameObjects: [gameOverScreen] });
				
				//jsGFwk.Scenes.scenes.hud.enable();
				jsGFwk.Scenes.scenes.game.enable();
				jsGFwk._gameObjects.progress.destroy();
			};
		},
		update: function (delta) { },
		draw: function (context) {
			context.save();
				context.fillStyle = "black";
				context.fillText("Rubbing..." + parseInt((jsGFwk.ResourceManager._totalLoadedResources * 100) / jsGFwk.ResourceManager._totalResources) + "%", 30, 40);
				/*context.drawImage(jsGFwk.ResourceManager.graphics.loadingSoap.image,
					300, 200);*/
			context.restore();
		}
	});
  
	jsGFwk.start();
};