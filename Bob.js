class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0,
            density : 0.8

        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.r = radius;
    }
    display(){
        var pos2 = this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos2.x,pos2.y,this.r,this.r);

    }
}