function setup (){
    createCanvas(800,600)
    background(100)
}

var xValue = 100;
var forward = true;
var speed = 5;

function draw (){
    background(100)
    fill("white")
    rect(xValue, 100, 150, 70, 10);
    fill("green")
    ellipse(xValue, 160, 75, 75);
    ellipse(xValue+150, 160, 75, 75);
    
    
    // if(xValue > 650) {
    //     forward = false;
    // }
    // if(xValue == 0) {
    //     forward = true;
    // }
    
    if(xValue > 600 || xValue ==50) {
        speed*= -1;
    }
    
    if(forward){
        xValue +=speed;
    }
    else {
        xValue -=speed;
    }
    
    fill("pink")
    
    textSize(40)
    text("position: " + xValue, 20,40)
    text("speed: " + speed, 300,40)
}

function keyPressed(){
    
}