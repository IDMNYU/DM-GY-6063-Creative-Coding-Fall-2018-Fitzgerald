function setup() {
	// put setup code here
	createCanvas(800, 800);
	colorMode(HSB); // change the color mode
	for (var x = 0; x < width; x += 50) { // the first for loop
		for (var y = 0; y < height; y += 50) { // a nested loop inside the first one
			if ((x + y) % floor(random(25)) == 0) { // pick a random location
				// draw a circle
				noFill();
				stroke(map(x, 0, width, 0, 360), map(y, 0, width, 0, 100), 100);
				ellipse(x + 25, y + 25, 100 * noise(x / width), 100 * noise(x / width));
			} else {
				// otherwise
				// draw a rectangle
				stroke(0);
				fill(map(x, 0, width, 0, 360), map(y, 0, width, 0, 100), 100);
				rectMode(CENTER);
				rect(x + 25, y + 25, 25, 25);
			}
		}
	}
}