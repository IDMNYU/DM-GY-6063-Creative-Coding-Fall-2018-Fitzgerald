function setup() {
	// put setup code here
	createCanvas(255, 255);

	for (var x = 0; x < width; x += 5) {
		stroke(x);
		line(x, 0, x, height);
	}
}