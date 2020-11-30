class SlingShot {
    constructor(body1,point2){
        var constOptions ={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
        }
        this.sling = Constraint.create(constOptions);
        World.add(world,this.sling);
    }
    display(){
        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.pointB
        strokeWeight(4);
        line(pointA.x,pointA.y, pointB.x, pointB.y);
    }

}