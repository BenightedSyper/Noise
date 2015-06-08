var lastTime;
var canvas;
var ctx;
var PlayerShip;
var projectiles = [];
var enemies = [];
var viewPort;

var canvasWidth;
var canvasHeight;

var Graph;

// A cross-browser requestAnimationFrame
// See https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
var requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();
function Page_OnResize(){
    //canvas.width = window.innerWidth*0.95;
    //canvas.height = window.innerHeight*0.9;
}
function Page_OnLoad(){
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
    canvasWidth = window.innerWidth;
    canvas.width = canvasWidth;
    canvasHeight = window.innerHeight*0.95;
    canvas.height = canvasHeight;

	document.body.appendChild(canvas);

    Graph = new GraphCurve( document.getElementsByName("power")[0].value, 
                            document.getElementsByName("precision")[0].value, 
                            document.getElementsByName("population")[0].value);
    
	lastTime = Date.now();
	lastShot = lastTime;
    //main();
    render();

    Graph.print(ctx);
}

function main() {
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;

	update(dt);
	render();

	lastTime = now;
	requestAnimFrame(main);
};

function update(dt){
	handleInput(dt);
};

function render(){
    //clear screen
	ctx.save();
	ctx.fillStyle ="rgba(0,0,0,1)";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.restore();
};
function calculate(){
    this.render();
    Graph = new GraphCurve( document.getElementsByName("power")[0].value, 
                            document.getElementsByName("precision")[0].value, 
                            document.getElementsByName("population")[0].value);
    Graph.print(ctx);
};