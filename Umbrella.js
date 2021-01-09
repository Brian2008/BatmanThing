class Umbrella{
    constructor(x , y) {
        var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
        }
        this.body = Bodies.circle(x,y,20,options)
    }
    display(){
        var pos =this.body.position;
        push();
        loadImage("Walking Frame/walking_1.png")
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,100,30);
        this.image = loadImage("Walking/walking_1.png");
        pop();
    }
    image(){
        this.image.x=this.body.x
        this.image.y=this.body.y
    }
    
}
