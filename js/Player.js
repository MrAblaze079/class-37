class Player {
  constructor(){
    this.distance=0;
    this.name=null;
    this.index=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
                      //players/player+ 1
                      //players/player1
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  //Player.getPlayersInfo();
  static getPlayersInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val();
    })
   
  }

}
