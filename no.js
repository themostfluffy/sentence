//stats
var playerhp = 100;
var playerdmg = 1;
var player = 1;
var playerdeffence = 1;
var playercritchance = 10;
var playerCritmult = 2;
var enemyhp = 100;
//funny
var eye = 50;
function setup() {
  createCanvas(1500, 835);
}
function draw() {
  background(0, 0, 0);
  //lilguy :3c
  fill(0, 255, 0);
  ellipse(750, 417, 300, 300);
  fill(0, 0, 0);
  ellipse(700, 375, eye, eye);
  ellipse(800, 400, eye, eye);
  fill(255, 255, 255);
  textSize(32);
  text("player hp:", 100, 20);
  text(playerhp, 200, 20);

  text("enemy hp:", 750, 60);
  text(enemyhp, 850, 60);
  //game stuff
  // game input handled in keyReleased()

  //lilguy 3
  fill(0, 0, 0);
  textSize(125);
  textAlign(CENTER, CENTER);
  rotate(radians(95));
  text("3", 400, -755);
}

// attaking
function keyReleased() {

  
if (key === "a" || key === "A"&&randomNumber(1, 100) <= playercritchance) {
          enemyhp= enemyhp - (playerdmg*playerCritmult);
   }else{
    enemyhp = enemyhp - playerdmg 
   };

}
