class Form{
    constructor(){
     
this.button= createButton("play")
this.input=  createInput("name")
this.greeting= createElement('h4')

    }
    display(){
       var title=createElement('h3')
        title.html("CAR RACING GAME")
        title.position(displayWidth-400,5)
    
       
        this.input.position(displayWidth-200,displayHeight-300
          )
       this.button.position(displayWidth-200,displayHeight-250)
       
   
       this.button.mousePressed(()=>{
         
            this.input.hide();

          this.button.hide();


        player.playername=this.input.value();
       //console.log(player.playername);
        playercount=playercount+1
        player.playerindex=playercount

        player.updateplayerinfo()
        player.updatecount(playercount)
         this.greeting.html("Hello "+player.playername)
         this.greeting.position(displayWidth-200,displayHeight-200);
        
        })
      }
   hideform(){
     this.input.hide();
     this.button.hide();
     //this.greeting.hide();
     
   }
    
}




    

