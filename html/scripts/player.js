/* global jsGFwk*/
var playerKeys = {
  "A": 65,
  "F": 70,
  "J": 74,
  "L": 76
};

var player = {
  id: "player",
  visible: true,
  soapTemptationMeter: 0,
  actionKey: playerKeys.A,
  wasActionKeyPressed: false,
  temptationApproachTimer: {
    
  },
  onInit: function (settings) {
    var self = this;
    self.actionKey = settings.actionKey;
    
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
    ctx.fillText(this.soapTemptationMeter, 10, 10);
    ctx.restore();
  }
};