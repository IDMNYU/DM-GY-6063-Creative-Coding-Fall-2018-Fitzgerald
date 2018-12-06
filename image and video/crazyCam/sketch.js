var capture; // variable for the video
var xPos, yPos;
var xDir, yDir;
var rot;

function setup() {
    createCanvas(800, 600);
    capture = createCapture(VIDEO); // capture the video
    capture.size(640, 480); // camera size

    rot = 0.;
    yPos = random(height - 10);
    xPos = random(width - 10);

    xDir = random(-5, 5);
    yDir = random(-5, 5);
    background(0);
    
    capture.hide();

}

function draw() {
    xPos += xDir;
    yPos += yDir;
    rot += .05;
    if (xPos > width || xPos < 0) {
        xDir *= -1;
    }
    if (yPos > height || yPos < 0) {
        yDir *= -1;
    }

    translate(xPos, yPos);
    rotate(rot);
    // Displays the image and bounce it around at 1/2 size
    image(capture, -capture.width / 4, -capture.height / 4, capture.width / 4, capture.height / 4);

}
