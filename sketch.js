var maxDrops=100
var Umbrella
var thunder1,thunder2,thunder3,thunder4,
function preload(){
    thunder1=loadImage('images/thunderbolt/1.png')
    thunder2=loadImage('images/thunderbolt/2.png')
    thunder3=loadImage('images/thunderbolt/3.png')
    thunder4=loadImage('images/thunderbolt/4.png')
}

function setup(){
   createCanvas(400,800)
Umbrella = new Umbrella(200,600)
    
}

function draw(){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),(random(0,400))))
//var r = Math.round(random(1,4))
  //switch(r){
    //case 1:
    //break;
    //case 2:
    //break;
    //case 3:
   // break;
    //case 4:
    //break;
    //default:
    //break;
    }
Umbrella.display();
Reposition();
}   

