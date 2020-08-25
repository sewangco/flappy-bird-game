class Game {
    constructor(){
    this.obstacles= []
    }
preloadGame(){
this.backgroundImgs= [
        {
        src: loadImage('/Layers/sky_lightened.png'),
        x: 0,
        speed: 0,
      },
      {src: loadImage('/Layers/cloud_lonely.png'),
      x:0,
      speed:4,
    },
      {src: loadImage('/Layers/clouds_bg.png'),
        x:0,
        speed:1,
      },
      {src: loadImage('/Layers/glacial_mountains.png'),
        x:0,
        speed:2,
      },
      {src: loadImage('/Layers/clouds_mg_3.png'),
        x:0,
        speed:4,
      },
      {src: loadImage('/Layers/clouds_mg_2.png'),
        x:0,
        speed:3,
      },
      {src: loadImage('/Layers/clouds_mg_1.png'),
        x:0,
        speed:4,
      },
      
     

    ];
    this.playerImg =loadImage('/character/oie_2416851kxChZMTD.gif')
    this.pipeImgTop = loadImage("/obstacles/PixelArt-top.png");
    this.pipeImgBot = loadImage("/obstacles/PixelArt-bottomnew.png");
    
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
}

}