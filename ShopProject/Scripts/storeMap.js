var rackLength = 50;
var rackHeight = 15;

function drawStore() {

    drawAllRacks();
    drawDoors();

}

function drawDoors() {
    //TODO
}

function drawAllRacks() {
    var x = 75;
    var y = 75;

    for (var i = 0; i < 5; i++) {
        console.log("hello!");
        console.log(y);
        drawRack(x, y, 2, 3);
        y += 55;
        console.log(y);
    }
    y = 50;
    x = 300;
    for (i = 0; i < 8; i++) {
        drawRack(x, y, 2, 3);
        y += 55;
    }
}

function drawRack(x, y, width, height) {
    var ctx = $('#myCanvas')[0].getContext("2d");

    var xLoc = x;
    var yLoc = y;

    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            ctx.beginPath();
            ctx.rect(xLoc, yLoc, rackLength, rackHeight);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            ctx.stroke();
            xLoc += rackLength;
        }
        xLoc = x;
        yLoc += rackHeight;
    }

}

drawStore();


////get a reference to the canvas
//var ctx = $('#myCanvas')[0].getContext("2d");


////draw a circle
//ctx.beginPath();
//ctx.arc(85, 85, 10, 0, Math.PI * 2, true);
//ctx.closePath();
//ctx.fill();