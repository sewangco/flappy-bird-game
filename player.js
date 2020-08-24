class Player{
    constructor(){
        this.height= 120;
        this.width= 90;
        this.x = 0;
        this.y= 150;
        this.gravity=0.3;
        this.velocity=0;
        this.image;
    }
preloadPlayer(){

}
setupPlayer(){

}
drawPlayer(){
    this.velocity += this.gravity
    this.y += this.velocity
    console.log(height);
    
  if (this.y >= height - this.height ){   
    this.y = height - this.height;
  }

// this keeps him on the floor 

   if(this.y <= 0){
       console.log('you flew too high')
      this.y = 0;
   }
// this keeps him from leaving the top of the screen 
  image(this.image,this.x, this.y, this.height,this.width);
  }

jump(){
    console.log('this will be the jump');
    //this.gravity = -0.4;
    this.velocity= -10;
    // if (this.y === height - this.height){
      
    // }
    // this if statement doesnt allow it to double jump ! 
  }
}
