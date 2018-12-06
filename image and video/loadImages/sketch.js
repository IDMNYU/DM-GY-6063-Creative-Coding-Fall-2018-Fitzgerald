var img; // Declare variable img

function preload(){
	img = loadImage("sputnik.jpg"); // Load the image
}

function setup() {
	createCanvas(800, 370);
}

function draw() {
	background(0);

	if (mouseIsPressed) { // if mosue pressed
		// Displays the image at the mouse coordinates
		image(img, mouseX-img.width/2, mouseY-img.height/2);
	} else {
		// Displays the image at its actual size at point 0,0
		image(img, 0,0, img.width, img.height);
	}
}