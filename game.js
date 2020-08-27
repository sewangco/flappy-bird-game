
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
// this.backgroundSound =loadSound('./music/top_5_gaming_background_songs_copyright_free_fODMBHMByoK-gucZ8xFq.mp3');
this.backgroundSound =loadSound('./style/music-audiotrimmer.mp3');
this.coinPlay= loadSound('./style/mario-coin-sound-effect.mp3');
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
    this.spacebarImg= loadImage('./style/spacebarjump2.png')
    this.startPageImg= loadImage('./style/NEWNEWSTART.png')
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
    // this.player.drawPlayer();
    // image(this.startImg,150,100);
    // image(this.spacebarImg,200,105);
    image(this.startPageImg,120,50);
    score.parentNode.style.visibility = "hidden";
    // this.backgroundSound.play();


} else if (this.gameLevel === 1){
    this.background.drawBackground();
    this.player.drawPlayer();
    score.parentNode.style.visibility = "visible";
    if (frameCount == 20 || frameCount%200 == 0){
        let top = this.randomSize();
        while(top < 110 || top > 200) {
            top = this.randomSize();
        }
        this.obstacles.push(new Obstacle(this.pipeImgTop,this.pipeImgBot, top));
    }

    this.obstacles.forEach(obstacle => {
        obstacle.drawObstacle();
      });

    this.obstacles= this.obstacles.filter((obstacle)=> {
        if (obstacle.collision(this.player)){
            //console.log("mistakes were made")
          return false
        } else{
          return true
        }
      });

} else if (this.gameLevel === 2){
    
    image(this.yourScoreImg, 340,94)
    textSize(60);
    // fill(173, 17, 44);
    fill(255,255,255);
    textFont('My Custom Font')
    text(currentScore, 615, 130);
    image(this.endImg,308,210);
    image(this.restartImg,309, 300);
    this.player.y = 0;
    this.player.velocity=0;
    this.backgroundSound.pause()
    start=false

}


}
}
