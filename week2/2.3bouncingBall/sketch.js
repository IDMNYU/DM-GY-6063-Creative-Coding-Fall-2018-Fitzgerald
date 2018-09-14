//////// Global variables are used throughout the sketch
var xPos, yPos;
var xDir, yDir;

function setup() {
    createCanvas(600, 600);
    // instantiate the variables
    xPos = width / 2;
    yPos = 17;
    xDir = 1;
    yDir = 1;
}

function draw() {
    background(180, 220, 10);
    ellipse(xPos, yPos, 100, 100);
    
    // IF the xPos variable is greater than the width of the screen
    // (moves to the right side) reverse direction
    if (xPos > width) {
        // do a thing
        xDir *= -1;
    }
    // IF the xPos variable is less than 0
    // (moves to the left side) reverse direction
    if (xPos < 0) {
        // do a thing
        xDir *= -1;
    }
    // IF the yPos variable is greater than the height of the screen
    // (moves to the bottom ) reverse direction    
    if (yPos > height) {
        // do a thing
        yDir *= -1;
    }
    // IF the yPos variable is less than 0
    // (moves to the top) reverse direction  
    if (yPos < 0) {
        // do a thing
        yDir *= -1;
    }
    // add to the direction variables for the next loop
    xPos += xDir;
    yPos += yDir;
    
    // right now, the ball bounces at the center. How would you make it bounce when the edge touches instead?
}