class Obstacle{
    constructor(imgTop, imgBot){
        this.gap = HEIGHT / 2;
        this.top= Math.floor(Math.random()*(HEIGHT- this.gap));
        this.bottom= HEIGHT - (this.top + this.gap);
        this.x = WIDTH;
        this.width = 50;
        this.speed= 2;
        this.imageTop =imgTop;
        this.imageBot= imgBot; 
    }

preloadObstacle(){}
   
setUpObstacle(){}
   
collision(playerInfo) {
    //console.log(playerInfo.y, this.top, (height - this.bottom));
  if((playerInfo.y < this.top || playerInfo.y > (height - this.bottom))&& playerInfo.x === this.x){
      console.log('you have collided');
  }


}

drawObstacle(){
    this.x-= this.speed;
    // console.log(this.imageBot)
    image(this.imageTop,this.x,0, this.width, this.top);
    image(this.imageBot,this.x,HEIGHT- this.bottom, this.width, this.bottom);
    }


}