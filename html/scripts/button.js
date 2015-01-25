var buttonCounter = 0;

var Button = function(x, y, imageCollection, id, name, player) {
	this.player = player;
	this.id = id || "button " + this.buttonCounter++;
	this.visible = true;
	this.x = x;
	this.y = y;
	this.toggled = false;
	this.spriteBag = imageCollection.spriteBag;
	this.imageCollection = imageCollection;
	this.name = name;
};

Button.prototype.init = function() {
	
};

Button.prototype.onUpdate = function(delta) {
	
};

Button.prototype.onDraw = function(ctx) {
	var currentImage = this.toggled ? 0 : 1;
	ctx.save();
	ctx.drawImage(this.spriteBag[currentImage].image, this.x, this.y);
	ctx.textAlign = "center";
	ctx.fillStyle = "black";
	ctx.font = "30pt zxBold";
	ctx.fillText(this.name, this.x + 30, this.y);
	
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(this.x + 80, this.y, 10, 50);
	ctx.fillStyle = "#00FF00";
	ctx.fillRect(this.x + 65, this.y, 10, 50);

	
	
	ctx.restore();
	
	
};

Button.prototype.toggle = function() {
	this.toggled = !toggled;
};


