function setup() {
createCanvas(600, 600);
  
}

function draw() {
    background(180, 220, 10); // background() erases the previous canvas
    ellipse(mouseX, mouseY ,  100, 100); // the ellipse center is tied to the mouse location
}