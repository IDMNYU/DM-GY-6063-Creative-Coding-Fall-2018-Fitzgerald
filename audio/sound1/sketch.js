var wave;
// sine, tri, squ, saw
var button;
var play = 1;

var slider;

function setup() {
    createCanvas(800, 600);
        slider = createSlider(31, 440, 100);

    
    wave = new p5.Oscillator();
    wave.setType('sine');
    wave.start();
    wave.amp(.5);
    wave.freq(31);
    button = createButton('start/stop');
    button.mousePressed(toggle)
}

function draw() {
    wave.freq(slider.value());
    background(0);
}

function toggle(){
    if(play ==1){
        wave.amp(0.0, .5);
        play = 0;
    }else{
        wave.amp(.5, .5);
        play = 1;        
    }
    
}