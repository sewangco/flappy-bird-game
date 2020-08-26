
// document.getElementById("startGame").addEventListener("click", () => {
//     startGame = true;
//     document.getElementById("menu").style.display = "none";
//     document.getElementById("score").style.display = "block";

class Game {
    constructor(){
    this.obstacles= []
    this.gameLevel= 0;
    }

preloadGame(){
this.backgroundImgs= [
        {
        src: loadImage('Layers/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg'),
        x: 0,
        speed: 0,
      },
      {src: loadImage('Layers/cloud_lonely.png'),
      x:0,
      speed:3,
    },
      {src: loadImage('Layers/clouds_bg.png'),
        x:0,
        speed:2,
      },
      {src: loadImage('Layers/glacial_mountains.png'),
        x:0,
        speed:2,
      },
      {src: loadImage('Layers/clouds_mg_3.png'),
        x:0,
        speed:3,
      },
      {src: loadImage('Layers/clouds_mg_2.png'),
        x:0,
        speed:3,
      },
      {src: loadImage('Layers/clouds_mg_1.png'),
        x:0,
        speed:4,
      },
    ];

    this.playerImg =loadImage('/character/oie_2416851kxChZMTD.gif')
    this.pipeImgTop = loadImage("obstacles/PixelArt-top.png");
    this.pipeImgBot = loadImage("obstacles/PixelArt-bottomnew.png");
    this.startImg= loadImage('style/start.png');
    this.endImg= loadImage('/style/gameover.png')
    
}
setupGame(){
    this.background= new Background()
    this.background.images = this.backgroundImgs;
    this.player= new Player();
    this.player.image= this.playerImg;
    // this.obstacle.imageTop = this.pipeImgTop
    // this.obstacle.imageBot = this.pipeImgBot
}

drawGame(){
if(this.gameLevel === 0) {
    clear()
    // this.background.drawBackground();
    this.player.drawPlayer();
    image(this.startImg,180,250);

} else if (this.gameLevel === 1){
    this.background.drawBackground();
    this.player.drawPlayer();
    if (frameCount === 30 || frameCount%260 === 0){
        this.obstacles.push(new Obstacle(this.pipeImgTop,this.pipeImgBot));
    }

    this.obstacles.forEach(obstacle => {
        obstacle.drawObstacle();
      });

    this.obstacles= this.obstacles.filter((obstacle)=> {
        if (obstacle.collision(this.player)){
          return false
        } else{
          return true
        }
      });
} else if (this.gameLevel === 2){
    image(this.endImg,0,0);
}


}



// isGameOver(){
//     if (this.obstacle.collision()){
//         window.alert("game over");
//         console.log('isGameOver');
//     }
}
