var img; // image we will eventually display on our canvas
var processed;
var counter = 0;

function preload() {
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


    var totR = 0;
    var totG = 0;
    var totB = 0;

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {

            var currpixel = (y * img.width + x) * 4;


            //            var offset = (y * img.width + floor(random(width - x))) * 4;

            processed.pixels[currpixel] = img.pixels[currpixel]; // in the image swap red values for blue values
            processed.pixels[currpixel + 1] = img.pixels[currpixel + 1]; // in the image swap green values for red values
            processed.pixels[currpixel + 2] = img.pixels[currpixel + 2]; // in the image swap blue values for green values
            processed.pixels[currpixel + 3] = img.pixels[currpixel + 3]; // keep alpha the same for now


        }
    }


    for (var y = 0; y < 100; y++) {
        for (var x = 0; x < 100; x++) {

            var currpixel = (y * img.width + x) * 4;

            totR += img.pixels[currpixel];
            totG += img.pixels[currpixel + 1];
            totB += img.pixels[currpixel + 2];

        }
    }

    totR = totR / (100 * 100);
    totG = totG / (100 * 100);
    totB = totB / (100 * 100);
    console.log(totR);

    for (var y = 0; y < 100; y++) {
        for (var x = 0; x < 100; x++) {

            var currpixel = (y * img.width + x) * 4;


            var offset = (y * img.width + floor(random(width - x))) * 4;

            processed.pixels[currpixel] = totR; // in the image swap red values for blue values
            processed.pixels[currpixel + 1] = totG; // in the image swap green values for red values
            processed.pixels[currpixel + 2] = totB; // in the image swap blue values for green values
            processed.pixels[currpixel + 3] = img.pixels[currpixel + 3]; // keep alpha the same for now


        }
    }

    processed.updatePixels(); // update all the pixels for the image after you've looped through all the pixels

    image(processed, 0, 0); // finally write new processed image to the canvas
}

function mouseReleased() {

    counter++;
}
