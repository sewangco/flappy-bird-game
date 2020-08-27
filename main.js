const game = new Game();
const WIDTH = 4000 / 4;
const HEIGHT = 2000 / 4;
let start=false
let currentScore = 0;
// let startGame = false;
// let gameOver = false;

function preload() {
    game.preloadGame();
   
}


function setup() {
    const canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas-holder');
    game.setupGame();
}

function draw() {
    game.drawGame();
}

function keyPressed() {
    if (keyCode=== 32){
        game.player.jump();
    }
    if (keyCode=== 13 && (game.gameLevel == 0 || game.gameLevel == 2)){
        game.gameLevel = 1
        score.innerText= 0;
        currentScore = 0;
    }
    if(keyCode==13 && !start){
        game.backgroundSound.play();
        start=true   
    }
}

function mouseClicked(){
    if (game.gameLevel=== 0&& !start){
        game.backgroundSound.loop();
    start=true}

}

// const gameOverFunc = () => {
//         gameOver = true;
//         startGame = false;
        // document.getElementById("score").innerText = `Score :  ${currentScore}`;
        // text("GAME OVER", WIDTH - 2500 / 4, HEIGHT / 4);
        //button = createButton("Restart Game");
        // button.position(WIDTH / 2 + 600 / 4, HEIGHT - 200 / 4 / 2);
        // button.mousePressed(function() {
        //   location.reload();
        // });    


