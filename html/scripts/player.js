/* global jsGFwk*/

var player = {
  id: "player",
  visible: true,
  soapTemptationMeter: 0,
  actionKey: -1,
  wasActionKeyPressed: false,
  temptationApproachTimer: { },
  x: 0,
  y: 0,
  onInit: function (settings) {
    var self = this;
    self.actionKey = settings.actionKey;
	self.x = settings.x;
	self.y = settings.y;
    
    this.temptationApproachTimer = new jsGFwk.Timer({
        action: function () {
           self.soapTemptationMeter -= 5;
        }, 
        tickTime: 10
    });
  },
  
  onUpdate: function (delta) {
    if (!this.wasActionKeyPressed && jsGFwk.IO.keyboard._activeKey[this.actionKey]) {
      this.soapTemptationMeter += 10;
      this.wasActionKeyPressed = true;
    }
    if (!jsGFwk.IO.keyboard._activeKey[this.actionKey]) {
      this.wasActionKeyPressed = false; 
    }
    this.temptationApproachTimer.tick(1);
  },
  onDraw: function (ctx) {
    ctx.save();
    ctx.fillStyle = "black";
	ctx.font = "24pt zxBold";
    ctx.fillText(this.soapTemptationMeter, this.x, this.y);
    ctx.restore();
  }
};