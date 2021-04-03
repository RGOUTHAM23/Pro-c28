class Boy{
    constructor(x,y,width,height){
    var options={
      isStatic:true,
      friction:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("Images/boy.png");
    this.width= width;
    this.height = height;
    World.add(world,this.image);

  }
  display(){
    var pos = this.body.position;
    push();
  
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  }

}