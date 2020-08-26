class Obstacle{
    constructor(imgTop, imgBot, top){
        this.gap = HEIGHT / 3;
        this.top= top; // Math.floor(Math.random()*(HEIGHT- this.gap));
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
  if((playerInfo.y +(playerInfo.height/2) < this.top || playerInfo.y + (playerInfo.height/2) > (height - this.bottom))&& playerInfo.x + playerInfo.width === this.x){
    console.log('you have collided');
    game.gameLevel = 2;
    return true 
  }
  if( playerInfo.x + playerInfo.width === this.x && playerInfo.y >= this.top && playerInfo.y < (height - this.bottom)) {
    const score= document.querySelector('#score')
    console.log(score.innerText)
    currentScore++;
    score.innerText= currentScore
    
  }
  
}



drawObstacle(){
    this.x-= this.speed;
    // console.log(this.imageBot)
    image(this.imageTop,this.x,0, this.width, this.top);
    image(this.imageBot,this.x,HEIGHT- this.bottom, this.width, this.bottom);
    }
}
