var myVar;  // this is global

function setup() {
    
    var localVar = 10; // only available in setup
    console.log(localVar);
}

function draw() {
    console.log(localVar);

}