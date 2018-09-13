var xPos, yPos;
var xDir, yDir;

function setup() {
    createCanvas(600, 600);
    xPos = width / 2;
    yPos = 17;
    xDir = 1;
    yDir = 1;
}

function draw() {
    background(180, 220, 10);
    ellipse(xPos, yPos, 100, 100);
    if (xPos > width) {
        // do a thing
        xDir *= -1;
    }
    if (xPos < 0) {
        // do a thing
        xDir *= -1;
    }
    if (yPos > height) {
        // do a thing
        yDir *= -1;
    }
    if (yPos < 0) {
        // do a thing
        yDir *= -1;
    }
    xPos += xDir;
    yPos += yDir;
}