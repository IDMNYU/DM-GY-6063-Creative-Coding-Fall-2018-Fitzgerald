var img; // Declare variable img

function preload(){
	img = loadImage("weirdo.jpg"); // Load the image
}

function setup() {
	createCanvas(img.width, img.height); // conform to iage size
	noStroke();
	fill(0);
}

function draw() {
	background(255);
	img.loadPixels(); // load the pixel array
	var stepSize = round(map(mouseX, 0, width, 4, 32));
	// making sure they are integers
	// based on mouseX limit the size of our ellipses' diameter to be between 6 and 32 px

	for (var y = 0; y < height; y += stepSize) { // loop through the array
		for (var x = 0; x < width; x += stepSize) {

			var i = (y * width + x) * 4; // find the pixel location in the pixels array
			// just using the red channel
			var r = img.pixels[i];
			var g = img.pixels[i + 1];
			var b = img.pixels[i + 2];
            var total = (r+b+g)/3;
			// figure out how dark the pixel is at this location
			var darkness = (255 - total) / 255;
			var radius = stepSize * darkness; // get the radius of the ellipse to be drawn
			fill(r, g, b);
			ellipse(x, y, radius, radius);
		}
	}
}