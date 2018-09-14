var rot; // variable to hold a value in radians
var xPos, yPos;

function setup() {
    createCanvas(600, 600);
    
    // initialize variables
    xPos = width/2;
    yPos = height/2;
    rot = 0.0;

}

function draw() {
    background(180, 220, 10);
    
    push(); // push the following code out of the normal drawing routine
    translate(xPos, yPos); // move the coordinate system
    rotate(rot); // rotate the scene
    rectMode(CENTER); 
    rect(0, 0, 100, 100); // draw our rectangle
    pop(); // pop the whole thing back into place
    
    rect(100, 100, 20, 20); // draw a regular square w/ no rotation
    
    push(); // push the following code out of the normal drawing routine
    translate(mouseX, mouseY); // move the coordinate system
    scale(2.0*(height/mouseY+1)); // scale the scene based on mouse position
    fill(255*(mouseX/width)); // change color based on x-axis
    ellipse(0, 0, 10, 10); // draw a circle
    pop(); // pop the whole thing back into place
    
    rot+=0.01; // increment the rotation
    
}