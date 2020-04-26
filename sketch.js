var canvas, player, playercount, game, form,  database, backgroundimg;
var gamestate=0
var allplayers
var car1
var car2
var carsarray




function setup(){


    canvas=createCanvas(displayWidth-400,displayHeight-300);                     
    database=firebase.database();

game=new Game();
game.getstate();
game.start();




}

function draw(){
    if(playercount===2){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();

        drawSprites();
    }


}