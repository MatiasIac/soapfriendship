/*global introAnim, window, document, player, jsGFwk, keyMap, StartGameTimer, hud, background, soap, gameOverScreen, playerController, util */
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
	
	/*util.addOggSound("sounds/brillo.ogg", "shineSound");
	util.addOggSound("sounds/shower.ogg", "showerSound");
	util.addOggSound("sounds/jabon.ogg", "showerMusic");
	util.addOggSound("sounds/jabon.ogg", "soapSound");*/
	
	var duchaMusic = {};
		duchaMusic[jsGFwk.ResourceManager.sounds.format.ogg] = { source: "sounds/duchamusic.ogg" };
		duchaMusic[jsGFwk.ResourceManager.sounds.format.mp3] = { source: "sounds/duchamusic.mp3" };
	jsGFwk.ResourceManager.addSound({ name: "musica", sources: duchaMusic});
	
	var voz6 = {};
		voz6[jsGFwk.ResourceManager.sounds.format.ogg] = { source: "sounds/voz6.ogg" };
		voz6[jsGFwk.ResourceManager.sounds.format.mp3] = { source: "sounds/voz6.mp3" };
	jsGFwk.ResourceManager.addSound({ name: "voz6", sources: voz6 });
	
	var brillo = {};
		brillo[jsGFwk.ResourceManager.sounds.format.ogg] = { source: "sounds/brillo.ogg" };
		brillo[jsGFwk.ResourceManager.sounds.format.mp3] = { source: "sounds/brillo.mp3" };
	jsGFwk.ResourceManager.addSound({ name: "brillo", sources: brillo });
	
	var jabon = {};
		jabon[jsGFwk.ResourceManager.sounds.format.ogg] = { source: "sounds/jabon.ogg" };
		jabon[jsGFwk.ResourceManager.sounds.format.mp3] = { source: "sounds/jabon.mp3" };
	jsGFwk.ResourceManager.addSound({ name: "jabon", sources: jabon });
	
	var showerSound = {};
		showerSound[jsGFwk.ResourceManager.sounds.format.ogg] = { source: "sounds/shower.ogg" };
		showerSound[jsGFwk.ResourceManager.sounds.format.mp3] = { source: "sounds/shower.mp3" };
	jsGFwk.ResourceManager.addSound({ name: "shower", sources: showerSound });
	
	jsGFwk.ResourceManager.addGraphic({	name: "loadingSoap", source: "images/loadingSoap.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "hubSprite", source: "images/hudMainSprites.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "hubBackground", source: "images/hudBackground.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "bubble", source: "images/bubuja.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "mano", source: "images/mano.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "button", source: "images/button.png" });

	jsGFwk.ResourceManager.addGraphic({	name: "prisoner1", source: "images/PrisionGuy1.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "prisoner2", source: "images/PrisionGuy2.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "prisoner3", source: "images/PrisionGuy3.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "prisoner4", source: "images/PrisionGuy4.png" });

	jsGFwk.ResourceManager.addGraphic({	name: "light", source: "images/light.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "cloud", source: "images/cloud.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "animBackground", source: "images/animbackground.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "animSoap", source: "images/animSoap.png" });
	
	jsGFwk.ResourceManager.addGraphic({	name: "showers", source: "images/backshawer.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "heads", source: "images/head-test.png" });
	
	jsGFwk.ResourceManager.addGraphic({	name: "headv1", source: "images/head-guy1.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "headv2", source: "images/head-guy2.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "headv3", source: "images/head-guy3.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "headv4", source: "images/head-guy4.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "gameover1", source: "images/gameover_player1-01.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "gameover2", source: "images/gameover_player2-01.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "gameover3", source: "images/gameover_player3-01.png" });
	jsGFwk.ResourceManager.addGraphic({	name: "gameover4", source: "images/gameover_player4-01.png" });
	jsGFwk.createObject({
		id: "progress",
		visible: true,
		barWidth: 0,
		init: function () {
			jsGFwk.ResourceManager.onResourcesLoadedCompleted = function () {
			
				jsGFwk.Sprites.createSpriteCollection("button", 
					jsGFwk.ResourceManager.graphics.button.image, 
						[{left: 64, top: 6, width: 60, height: 49},
						{left: 1, top: 6, width: 60, height: 49}]);
				var playerSpritesAtlas = util.makeAtlas(127, 261, 8, false);
				var mirroredPlayerSpritesAtlas = util.makeAtlas(127, 261, 8, true);
				
				var prisonerAtlas = util.makeAtlas(167, 275, 8, false);
				var prisonerAtlasMirror = util.makeAtlas(167, 275, 8, true);
				
				jsGFwk.Sprites.createSpriteCollection("prisoner1", 
					jsGFwk.ResourceManager.graphics.prisoner1.image,
					prisonerAtlasMirror);
				
				jsGFwk.Sprites.createSpriteCollection("prisoner2", 
					jsGFwk.ResourceManager.graphics.prisoner2.image,
					prisonerAtlasMirror);	
				
				jsGFwk.Sprites.createSpriteCollection("prisoner3", 
					jsGFwk.ResourceManager.graphics.prisoner3.image,
					prisonerAtlas);	
				
				jsGFwk.Sprites.createSpriteCollection("prisoner4", 
					jsGFwk.ResourceManager.graphics.prisoner4.image,
					prisonerAtlas);	
				
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
				
				var timer = new StartGameTimer(5, 20, function startCallback() {
					players.eachCloned(function(clone) {
						clone.enable();
					});
				});
								
				jsGFwk.Scenes.create({name: "hud", gameObjects: [hud] });
				jsGFwk.Scenes.create({name: "introAnim", gameObjects: [introAnim] });
				jsGFwk.Scenes.create({name: "game", gameObjects: [background, playerController, soap, players, timer] });	
				jsGFwk.Scenes.create({name: "gameOver", gameObjects: [gameOverScreen] });
								
				GlobalPriosionerHeads = util.createPrisonerHeads();
				
				jsGFwk.Sprites.createSprite({
					id: "player3GrayHead",
					graphic: jsGFwk.Sprites.idle1Mirror.spriteBag[0].image,
					left: 0, top: 0, width: 80, height: 90
				}, jsGFwk.Sprites.filters.GRAYSCALE);
				
				jsGFwk.Sprites.createSprite({
					id: "player2GrayHead",
					graphic: jsGFwk.Sprites.idle1h2.spriteBag[0].image,
					left: 0, top: 0, width: 80, height: 90
				}, jsGFwk.Sprites.filters.GRAYSCALE);
							
				jsGFwk.Scenes.scenes.hud.enable();
				//jsGFwk.Scenes.scenes.game.enable();
				//jsGFwk.Scenes.scenes.gameOver.enable();
				jsGFwk._gameObjects.progress.destroy();
			};
		},
		update: function (delta) { },
		draw: function (context) {
			context.save();
				context.textAlign = "center";
				context.font = "24pt arial";
				context.fillStyle = "black";
				context.fillText("Rubbing..." + parseInt((jsGFwk.ResourceManager._totalLoadedResources * 100) / jsGFwk.ResourceManager._totalResources) + "%", 200, 240);
				/*context.drawImage(jsGFwk.ResourceManager.graphics.loadingSoap.image,
					300, 200);*/
			context.restore();
		}
	});
  
	jsGFwk.start();
};