class SlingShot{
    constructor(body1,pointB){
    var options = {
        bodyA:body1,
        pointB:pointB,
        stiffness :0.004,
        length:1.5
        
    }
    this.bodyA = body1;
    this.pointB = pointB;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
  }
  attach(body){
    this.chain.bodyA = body;
  }
  fly(){
   this.chain.bodyA = null;
 }

display(){
  if(this.chain.bodyA){
 var pos = this.chain.bodyA.position;
 var pos1 = this.chain.pointB;
 strokeWeight(3);
 line(pos.x,pos.y,pos1.x,pos1.y);
   }
  }
}


