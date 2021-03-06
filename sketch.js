var database
var gamestate=0, playercount
var form, player, game
var allplayers

function setup(){
database = firebase.database()
createCanvas(400,400)
game = new Game()
game.readstate()
game.start()
}

function draw(){
if(playercount ==4){
game.updatestate(1)

}
 if (gamestate == 1 ) {
game.play()

 }
}