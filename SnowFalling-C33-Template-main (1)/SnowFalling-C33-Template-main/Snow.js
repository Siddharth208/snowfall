class Snow{
    constructor(x,y){
    var options={
        density:1,
        friction:1,
        
    }   
    this.x=x;
    this.y=y;
    this.image=loadImage("snow4.webp")
    this.body = Bodies.rectangle(x,y,50,50,options);
    
    }
    display()  
    {
        push()
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop()
        }
}



        

