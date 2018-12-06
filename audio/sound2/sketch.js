var wave;
// sine, tri, squ, saw
var button;
var play = 1;

var slider;
var env;

function setup() {
    createCanvas(800, 600);
        slider = createSlider(31, 440, 100);
env = new p5.Env();
    env.setADSR(.15, .05, .75, .5);
    env.setRange(.8, 0);
    
    wave = new p5.Oscillator();
    wave.setType('sine');
    wave.start();
    wave.amp(env);
    wave.freq(31);
    button = createButton('start/stop');
    button.mousePressed(toggle)
}

function draw() {
    wave.freq(slider.value());
    background(0);
}

function toggle(){
    
        env.play();

    
}