var b, b1;
var s;

function setup() {
	createCanvas(800, 800);
	b = new Square(random(width), random(height), 100);

	b1 = new Square(random(width), random(height), 100);
	s = createSlider(0, 255, 127)
	s.position(10, 10);
}

function draw() {
	background(0);

	b.update(s.value());
	b.move();
	b.render();

	b1.update(s.value());
	b1.move();
	b1.render();

}