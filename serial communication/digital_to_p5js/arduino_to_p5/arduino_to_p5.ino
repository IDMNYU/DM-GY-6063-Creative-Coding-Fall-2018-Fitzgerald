// These constants won't change. They're used to give names to the pins used:
const int switchPin = 2;  // digital input pin that the switch is attached to

int switchVal = 0;        // value read from the switch

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
  // configure the switch pin to an input
  pinMode(switchPin, INPUT);
}

void loop() {
  // read the digital value:
  switchVal = digitalRead(switchPin);

  // print the results:
  Serial.println(switchVal);

  // wait 15 milliseconds before the next loop
  delay(15);
}
