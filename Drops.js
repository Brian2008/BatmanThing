class Drops{
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
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,20,30);
        pop();
    }
    Reposition(){
        if(Drops.y>800){
            Drops.y=10
        }
    }
    
}

    