class Stone{
    constructor(x,y,radius){
    var options={
      density:3,
      isStatic:false,
      friction:1,
      restitution:0
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("Images/stone.png");
    this.body = Bodies.circle(x,y,radius,options);
    
  //  this.height = height;
    World.add(world,this.image);

  }
  display(){

    var pos = this.body.position;
   // pos.x = mouseX;
  //  pos.y = mouseY;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
  }

}