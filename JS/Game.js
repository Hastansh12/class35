class Game{
constructor(){}

getState(){
 var gameStateREf=   database.ref('gameState');
 gameState.on("value",function(data){
     gameState=data.val();
 })

}
 
update(state){
database.ref('/').update({
    gameState:state
});

}
 start(){
     if(gameState===0){
         form=new Form();
        player=new player();
       form. display();
       player.getCount();
     }
     
 }

}