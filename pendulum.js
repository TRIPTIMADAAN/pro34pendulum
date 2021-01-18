class Pendulum{
    constructor(x,y,color){
        var options={
           
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity
        }
        this.body= Bodies.circle(x,y,40,options)
        this.r=40
        this.color=color
        // console.log(world)
        // console.log(this.body)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        fill(this.color)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}