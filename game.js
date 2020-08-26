
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
        src: loadImage('./Layers/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg'),
        x: 0,
        speed: 0,
      },
      {src: loadImage('./Layers/cloud_lonely.png'),
      x:0,
      speed:3,
    },
      {src: loadImage('./Layers/clouds_bg.png'),
        x:0,
        speed:2,
      },
      {src: loadImage('./Layers/glacial_mountains.png'),
        x:0,
        speed:2,
      },
      {src: loadImage('./Layers/clouds_mg_3.png'),
        x:0,
        speed:3,
      },
      {src: loadImage('./Layers/clouds_mg_2.png'),
        x:0,
        speed:3,
      },
      {src: loadImage('./Layers/clouds_mg_1.png'),
        x:0,
        speed:4,
      },
    ];

    this.playerImg =loadImage('./character/oie_2416851kxChZMTD.gif')
    this.pipeImgTop = loadImage("./obstacles/PixelArt-top.png");
    this.pipeImgBot = loadImage("./obstacles/PixelArt-bottomnew.png");
    this.startImg= loadImage('./style/start.png')
    this.endImg= loadImage('./style/gameover2.png') 
    this.restartImg= loadImage("./style/restart2.png")
    this.yourScoreImg= loadImage('./style/score2.png') 
    this.spacebarImg= loadImage('./style/spacebar2.png')
}

setupGame(){
    this.background= new Background()
    this.background.images = this.backgroundImgs;
    this.player= new Player();
    this.player.image= this.playerImg;
    this.obstacle= new Obstacle();
    // this.obstacle.imageTop = this.pipeImgTop
    // this.obstacle.imageBot = this.pipeImgBot
}
randomSize() {
    return Math.floor(Math.random()*(HEIGHT- HEIGHT / 2));
}

drawGame(){
if(this.gameLevel === 0) {
    clear()
    // this.background.drawBackground();
    this.player.drawPlayer();
    image(this.startImg,150,250);
    image(this.spacebarImg,350,350);
    score.parentNode.style.visibility = "hidden";


} else if (this.gameLevel === 1){
    this.background.drawBackground();
    this.player.drawPlayer();
    score.parentNode.style.visibility = "visible";
    if (frameCount == 20 || frameCount%230 === 0){
        let topSize = this.randomSize();
        while(topSize < 110 || topSize > 200) {
            topSize = this.randomSize();
        }
        this.obstacles.push(new Obstacle(this.pipeImgTop,this.pipeImgBot, topSize));
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
    
    image(this.yourScoreImg, 340,100)
    textSize(50);
    fill(37, 78, 231);
    text(currentScore, 615, 130);
    image(this.endImg,300,210);
    image(this.restartImg,303, 340);
    

}

// isGameOver(){
//     if (this.obstacle.collision()){
//         window.alert("game over");
//         console.log('isGameOver');
//     }
}
}
