function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB); // change the color mode to HSB from default RGB
	background(0, 0, 255);
}

function draw() {
	noStroke();
	fill(map(mouseX, 0, width, 0, 360), map(mouseY, 0, height, 0, 255), 255); // change the color based on mouse location
	ellipse(mouseX, mouseY, 30, 30);
}