var canvas = document.getElementById("breakout");
var contex = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

function drawBall() {
    contex.beginPath();
    contex.arc(x, y, ballRadius, 0, Math.PI*2);
    contex.fillStyle = "red";
    contex.fill();
    contex.closePath();
}

function draw() {
    contex.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);