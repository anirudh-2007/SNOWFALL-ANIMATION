class Snow{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':0.5
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        this.snow = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //rectMode(CENTER);
        imageMode(CENTER);
        image(this.snow,0,0,this.r,this.r)
        //rect(0,0,this.r,this.r);
        pop();
      }
}