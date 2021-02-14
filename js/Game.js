class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    
    if(gameState === 0){

      player = new Player();

      var playerCountRef = await database.ref("playerCount").once("value");

      if(playerCountRef.exists()) {

        playerCount = playerCountRef.val();

        player.getCount();

      }

      form = new Form();
      form.display();

    }
  }

  play() {

    form.hide();

    textSize(30);
    textFont("Typograph Pro");
    text("GAME START", 120, 100);

    Player.getPlayerInfo();

    if(allPlayers !== undefined) {

      var index = 0;
      var x = 0;
      var y = 0;

      // var displayPosition = 130;

      for(var i in allPlayers) {

        index += 1;

        x += 200;

        y = displayHeight - allPlayers[i].distance;

        carsArray[index - 1].x = x;
        carsArray[index - 1].y = y;

        if(index === player.index) {

          carsArray[index - 1].shapeColor = "red";

          camera.position.x = displayWidth / 2;
          camera.position.y = carsArray[index - 1].y;

        }

      }


    }

    if(keyDown(UP_ARROW) && player.index !== null) {

      player.distance += 50;
      player.update();

    }

    drawSprites();

  }

}
