class Tree{
    constructor(x,y,width,height){
    var options={
      isStatic:true,
      friction:1
    }
    this.width= width;
    this.height = height;
    this.image = loadImage("Images/tree.png");
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    
    World.add(world,this.image);

  }
  display(){
    var pos = this.body.position;
    push();
   // rectMode(CENTER);
   // rect(pos.x,pos.y,this.width,this.height);
    imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  }

}