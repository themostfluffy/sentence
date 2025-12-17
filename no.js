//stats
var playerhp = 100;
var playerdmg = 100000000;

var playerdeffence = 1;
var playercritchance = 1;
var playerCritmult = 2;
var enemyhp = 50;
var enemydmg = 1;

var gold = 0;
var playerLevel = 1;

//funny
var eye = 50;
function setup() {
  createCanvas(1600, 835);
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
  text("gold:", 1400, 20);
  text(gold, 1450, 60);
  text("level:", 1400, 100);
  text(playerLevel, 1450, 140);
  //game stuff
  // game input handled in keyReleased()

  //lilguy 3
  fill(0, 0, 0);
  textSize(125);
  textAlign(CENTER, CENTER);
  rotate(radians(95));
  text("3", 400, -755);

  if (enemyhp <= 0&& playerhp > 0) {
   enemyhp = 50 + int(random(1, 50)+int(random(1,playerhp)));
   playerhp = playerhp - (enemydmg/playerdeffence);
   enemydmg = enemydmg + int(random(1,5));
    gold = gold + int(random(1,10))*playerLevel;
    playerLevel = playerLevel + 1;
  } 
}

// attaking
function keyReleased() {
if (key === "a" || key === "A" ) {
 enemyhp = enemyhp - playerdmg;
   } else if (int(random(1,100)) <= playercritchance ) {
 enemyhp = enemyhp - (playerdmg * playerCritmult);
   }

  
}
