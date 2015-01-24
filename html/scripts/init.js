/*global window, document, player, jsGFwk*/
window.onload = function init() {
  jsGFwk.settings.canvas = "canvas";
  jsGFwk.settings.clearColor = "rgb(50, 50, 50)";
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

  jsGFwk.Fonts.createFont({
    name: 'zxBold',
    source: 'fonts/zxBold.ttf'
  });
/*
  jsGFwk.createObject({
    id: "progress",
    visible: true,
    barWidth: 0,
    init: function () {
      jsGFwk.ResourceManager.onResourcesLoadedCompleted = function () {
        
        //jsGFwk._gameObjects.progress.destroy();
      };
    },
    update: function (delta) {},
    draw: function (context) {
      context.save();
      context.fillStyle = "white";
      context.fillText("Connecting..." + parseInt((jsGFwk.ResourceManager._totalLoadedResources * 100) / jsGFwk.ResourceManager._totalResources) + "%", 30, 40);
      context.restore();
    }
  });
*/
  jsGFwk.Container.createContainer("players", player);

  jsGFwk.start();
};