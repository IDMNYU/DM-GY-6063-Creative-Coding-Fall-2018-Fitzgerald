var img; // Declare variable img
var xPos, yPos;
var xDir, yDir;
var rot;

function preload(){
	img = loadImage("sputnik.jpg"); // Load the image
	
}

function setup() {
	createCanvas(800, 600);
    rot = 0.;
	yPos = random(height - 10);
	xPos = random(width - 10);

	xDir = random(-5, 5);
	yDir = random(-5, 5);
}

function draw() {
	background(0);
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
	// Displays the image and bounce it around
	image(img, -img.width / 2, -img.height / 2, img.width / 2, img.height / 2);


}