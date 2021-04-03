class Mango{
    constructor(x,y,radius){
    var options={
      isStatic:true,
     restitution : 0,
     density : 1,
     friction :1
    }
    this.x = x;
    this.y = y;
    this. radius =radius;
   // this.height = height;
    this.image = loadImage("Images/mango.png");
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    
   
    World.add(world,this.image);

  }
  display(){
    var pos = this.body.position;
    push();
   
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
  }

}