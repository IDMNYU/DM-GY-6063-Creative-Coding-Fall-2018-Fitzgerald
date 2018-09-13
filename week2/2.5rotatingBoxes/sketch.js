var rot;
var xPos, yPos, xDir, yDir;

function setup() {
    createCanvas(600, 600);
    xPos = width/2;
    yPos = height/2;
    rot = 0.0;
//    xDir = random(-5, 5);
//    yDir = random(-5, 5);
}

function draw() {
    background(180, 220, 10);
    push();
    translate(xPos, yPos);
    rotate(rot);
    rectMode(CENTER);
    rect(0, 0, 100, 100);
    pop();
    rect(100, 100, 20, 20);
    rot+=0.01;
    
//    if (xPos > width) {
//        // do a thing
//        xDir *= -1;
//    }
//    if (xPos < 0) {
//        // do a thing
//        xDir *= -1;
//    }
//    if (yPos > height) {
//        // do a thing
//        yDir *= -1;
//    }
//    if (yPos < 0) {
//        // do a thing
//        yDir *= -1;
//    }
//    xPos += xDir;
//    yPos += yDir;
}