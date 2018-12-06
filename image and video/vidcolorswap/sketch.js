var img; // image we will eventually display on our canvas
var processed; 

function preload(){
    img = loadImage("weirdo.jpg");
    
}

function setup() {
	createCanvas(img.width, img.height);
	
	processed = createImage(img.width, img.height); // create our image to be the same size as our canvas
	processed.loadPixels(); // load our pixels into our first set of pixels into the image
}

function draw() {
	background(255);
	img.loadPixels(); // load pixel information into our mirror array

	for (var i = 0; i < 4 * (img.width * img.height); i += 4) {
		//multiply and step by 4 since each pixel has 4 color variables associated with it (r,g,b,a)

		var r = img.pixels[i]; // store red value
		var g = img.pixels[i + 1]; // store green value
		var b = img.pixels[i + 2]; // store blue value
		var a = img.pixels[i + 3]; // store alpha value

		if (mouseIsPressed) {
			// do something weird with the color channels

			processed.pixels[i] = b; // in the image swap red values for blue values
			processed.pixels[i + 1] = r; // in the image swap green values for red values
			processed.pixels[i + 2] = g; // in the image swap blue values for green values
			processed.pixels[i + 3] = a; // keep alpha the same for now
		} else {

			// copy the pixel values the same as the original
			processed.pixels[i] = r; // copy red
			processed.pixels[i + 1] = g; // copy green
			processed.pixels[i + 2] = b; // copy blue
			processed.pixels[i + 3] = a; // keep alpha the same for now

		}
	}
	processed.updatePixels(); // update all the pixels for the image after you've looped through all the pixels
	image(processed, 0, 0); // finally write new processed image to the canvas
}