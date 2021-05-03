class Block{
  constructor(x, y, width, height) {
      var options = {
        restitution:0.7
                   
      }
       this.visibility=100
       this.x =x
       this.y=y
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.body.density=1
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      
      if (this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        this.rectangle = rect(0,0,this.width, this.height);
        pop();  
        
        }
        else {
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-1
           fill(0,0,0,this.visibility);
           translate(pos.x, pos.y);
           noStroke();
           rect(0,0,this.width,this.height)
           pop();
        }
    }
}