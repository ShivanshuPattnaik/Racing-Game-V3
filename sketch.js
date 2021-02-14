var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

var car1, car2, car3, car4;
var carsArray;

function setup(){
  
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  car1 = createSprite(100, 200, 20, 100);
  car2 = createSprite(300, 200, 20, 100);
  car3 = createSprite(500, 200, 20, 100);
  car4 = createSprite(700, 200, 20, 100);

  carsArray = [car1, car2, car3, car4];

}


function draw(){

  if(playerCount === 4) {

    game.update(1);

  }

  if(gameState === 1) {

    clear();
    game.play();

  }

}
