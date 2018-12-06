function Square(xPos, yPos, _size) {
	this.r = random(127, 255);
	this.g = random(127, 255);
	this.b = random(127, 255);
	this.a = 127;
	this.color = color(this.r, this.g, this.b, this.a);
	this.x = xPos;
	this.y = yPos;
	this.size = _size;
	this.xSpeed = random(-10, 10);
	this.ySpeed = random(-10, 10);
	this.spin = random();
	this.spinAmt = random();
	this.move = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	};
	this.render = function() {
		push();
		translate(this.x, this.y);
		rotate(this.spin);
		fill(this.color);
		rectMode(CENTER);
		rect(0, 0, this.size, this.size);
		pop();
	};
	this.update = function(_alpha) {
		this.color = color(this.r, this.g, this.b, _alpha);;
		if (this.x > width || this.x < 0) {
			this.xSpeed *= -1;
		}
		if (this.y > height || this.y < 0) {
			this.ySpeed *= -1;
		}
		this.spin += this.spinAmt;
	};
}