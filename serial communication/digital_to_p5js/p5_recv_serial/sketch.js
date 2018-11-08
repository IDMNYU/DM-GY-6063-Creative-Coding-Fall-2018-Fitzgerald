// Declare a variable to hold the SerialPort object
var serial;
var latestData = "waiting for data"; // you'll use this to write incoming data to the canvas

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Instantiate our SerialPort object
    serial = new p5.SerialPort();

    // Assuming our Arduino is connected, let's open the connection to it
    // Change this to the name of your arduino's serial port
    // get this from the Arduino IDE or p5.serialControl application
    serial.open("/dev/cu.usbmodem1411");

    // Here are callbacks to use
    // *******************************************************
    
    // When we connect to the underlying server
    serial.on('connected', serverConnected);

    // When we some data from the serial port
    serial.onData(gotData);

    // If we get an error
    serial.onError(gotError);

    // When our serial port is opened and ready for read/write
    serial.onOpen(gotOpen);

}

// We are connected and ready to go
function serverConnected() {
    console.log("Connected to Server");
}

// Connected to our serial device
function gotOpen() {
    console.log("Serial Port is Open");
}

// Uh oh, here is an error, let's log it
function gotError(theerror) {
    console.log(theerror);
}

// There is data available to work with from the serial port
function gotData() {
    var currentString = serial.readLine(); // read the incoming string
    trim(currentString); // remove any trailing whitespace
    if (!currentString) return; // if the string is empty, do no more
    console.log(currentString); // println the string
    latestData = currentString; // save it for the draw method
}

// Methods available
// serial.read() returns a single byte of data (first in the buffer)
// serial.readChar() returns a single char 'A', 'a'
// serial.readBytes() returns all of the data available as an array of bytes
// serial.readBytesUntil('\n') returns all of the data available until a '\n' (line break) is encountered
// serial.readString() retunrs all of the data available as a string
// serial.readStringUntil('\n') returns all of the data available as a string until a specific string is encountered
// serial.readLine() calls readStringUntil with "\r\n" typical linebreak carriage return combination
// serial.last() returns the last byte of data from the buffer
// serial.lastChar() returns the last byte of data from the buffer as a char
// serial.clear() clears the underlying serial buffer
// serial.available() returns the number of bytes available in the buffer
// serial.write(somevar) writes out the value of somevar to the serial device

function draw() {
    background(255, 255, 255);
    if(latestData == 1){
        fill(0, 0, 0);
    	ellipse(width/2,height/2, 400);
    } else{
    	noFill();
    	ellipse(width/2,height/2, 100);
    }
}
