var globalVar = 1.024;  // this is global and available everywhere

function setup() {
    
    var localVar = 10; // only available in setup
        print("globalVar :" + globalVar);

    print("localVar :" + localVar);
}

function draw() {
        print("globalVar :" + globalVar);

    print("localVar :" + localVar);

}