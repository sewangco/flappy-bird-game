class Obstacle{
    constructor(){
        this.gap = HEIGHT / 2;
        this.top= Math.floor(Math.random()*(HEIGHT- this.gap));
        this.bottom= HEIGHT - (this.top +this.gap);
        this.x = WIDTH;
        this.width = 50;
        this.speed= 2;
        this.image;

        // gap is constant , randomize one of the lengths 
        // two obstacles 
        // one obstacle , top minus gap = bottom block 
    }

preloadObstacle(){

}
   
setUpObstacle(){
    //image(this.pipeBot, this.x, HEIGHT - this.bottom, this.width, this.bottom);
}

   

drawObstacle(){
    this.x-= this.speed;
    image(this.imageTop,this.x,0, this.width, this.top);
    image(this.imageBot,this.x,HEIGHT- this.bottom, this.width, this.bottom);
//     rect(this.x, this.y, this.gapStart);
//     rect(this.x, this.gapStart + this.gapLength, this.y, height);
// }
    }


}