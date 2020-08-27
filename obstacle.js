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
let yCollision=(playerInfo.y + 30 < this.top || playerInfo.y + 40 > (height - this.bottom));
let xCollision=(this.x>playerInfo.x && this.x<playerInfo.x+playerInfo.width)||(this.x+this.width>playerInfo.x && this.x+this.width<playerInfo.x+playerInfo.width);



  if(xCollision&&yCollision){
    console.log('you have collided');
    game.gameLevel = 2;
    return true 
  }
  if( playerInfo.x + playerInfo.width === this.x && playerInfo.y >= this.top && playerInfo.y < (height - this.bottom)) {
    const score= document.querySelector('#score')
   /*  console.log(score.innerText)
    console.log(this.top); */
    currentScore++;
    score.innerText= currentScore
  }
  if (playerInfo.y + playerInfo.height >= 600){
    game.gameLevel = 2;
    return true 

  }
  }
  // if((playerInfo.y + 30 < this.top || playerInfo.y + 90 > (height - this.bottom))&& (playerInfo.x + playerInfo.width === this.x || playerInfo.x === this.x )){
  //   if(playerInfo.x + playerInfo.width >= this.x && playerInfo.x + playerInfo.width < this.x + this.width ){
  //     console.log('you have collided');
  //     game.gameLevel = 2;
  //     return true 
  //   }
  //}
  




drawObstacle(){
    this.x-= this.speed;
    // console.log(this.imageBot)
    image(this.imageTop,this.x,0, this.width, this.top);
    image(this.imageBot,this.x,HEIGHT- this.bottom, this.width, this.bottom);
    }
}
