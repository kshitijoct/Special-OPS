/*class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.button1 = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button1.position(displayWidth-100,20);
     
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    this.button1.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
     
      })
  }
}*/


class Form{
constructor(){
  this.input = createInput("Name");
 this.button = createButton('Play');
 this.title = createElement('h2');
 this.clan1button = createButton('clan1');
 this.clan2button = createButton('clan2');
}
display(){
  this.title.html("Special OPS");
  this.title.position(300,100);

  this.input.position(300,300);
  this.button.position(300,370);
  this.clan1button.position(400,400);
  this.clan2button.position(400,470);

this.clan1button.mousePressed(()=>{
  clan1Count+=1;
  player.updateClan1Count(clan1Count);
  game.update(0);
   
    })
    this.clan2button.mousePressed(()=>{
      clan2Count+=2
      player.updateClan2Count(clan2Count);
      game.update(0);
       
        })
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          
        });
      }
    }

