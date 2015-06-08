function GraphCurve(_pow, _deg, _int){
	this.amount = _int;
	this.degree = _deg;
	this.power = _pow;
	this.run();
};
GraphCurve.prototype.power = 0;
GraphCurve.prototype.amount = 0;
GraphCurve.prototype.degree = 100;
GraphCurve.prototype.points = [];
GraphCurve.prototype.addPoint = function(_val) {
	if(!this.points[_val * this.degree]){
		this.points[_val * this.degree] = 1;
	}else{
		this.points[_val * this.degree] += 1;
	}
};
GraphCurve.prototype.run = function() {
	this.points = [];
	var tempPoints = [];
	for(var i = 0; i < this.amount; i++) {
		for(var j = 0; j < this.power; j++) {
			do{
				tempPoints[j] = Math.random();
			}while(tempPoints[j] == 0);
		};
		var tempNum = 0;
		for(var g = 0; g < this.power; g++) {
			tempNum += tempPoints[g];
		};
		this.addPoint(Math.trunc(tempNum / this.power * this.degree)/this.degree);
	}
};
GraphCurve.prototype.print = function(_ctx) {
	for (var i = this.points.length - 1; i >= 0; i--) {
		_ctx.save();
		_ctx.strokeStyle = "hsl("+ (360 * i / this.degree) +",100%,50%)";
		_ctx.beginPath();
		_ctx.arc(i / this.degree * _ctx.canvas.width,10*this.points[i],10,0,2*Math.PI);
		_ctx.stroke();
		ctx.restore();
	};
};