function setup() {
  // put setup code here
    createCanvas(600, 600);
    console.log("Hello class this is fun!"); // this sends info to the console
}

function draw() {
  // put drawing code here
   // background(200); this is  light grey
  
    background(200, 10, 160);
    strokeWeight(5);
    stroke(255);
    rectMode(CENTER);
    fill(33, 33, 200); // change the color of the rectangle to blue
    rect(300, 300, 300, 100);
    noStroke();
    fill(200, 180, 10, 200);    // change the color of the circle to yellow
    ellipse(300, 250, 75, 75);
    
    noFill();
    stroke(0);
    rect(300, 300, 400, 400);

    console.log("mouseX : " + mouseX);
    console.log("mouseY : " + mouseY);
}