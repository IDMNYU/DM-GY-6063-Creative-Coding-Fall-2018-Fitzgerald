var playing = false; // a boolean for switching between states
var fingers; // variable to hold our video (video that happens to be about fingers)

function preload(){
        fingers = createVideo('fingers.mov'); // refer to your video file here

}

function setup() {
    createCanvas(800, 600);
   fingers.hide();
}

function draw() {
    background(0);
    image(fingers, 0, 0);
}

// plays or pauses the video depending on current state
function mousePressed() {
    if (playing) { // if you click the mouse and the video is already playing
        fingers.pause(); //then pause the video

    } else { // if you click the mouse and the video is not already playing
        fingers.loop(); // then play and loop the video
    }
    playing = !playing; // on each click set your playing boolean to be the opposite of what it already was. this way it will always update correctly  
}
