var animalTrivia;


function preload(){
    
    animalTrivia = loadJSON('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean');
 //   console.log(animalTrivia);
    
}


function setup(){
    createCanvas(800, 600);
    noLoop();
}


function draw(){
    for(var i = 0; i < animalTrivia.results.length; i++){
        text(animalTrivia.results[i].question, 10, (i*15)+10);
    }
    
}