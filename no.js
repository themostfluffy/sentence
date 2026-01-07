//stats
var playerhp = 100;
var playerMaxhp=100
var playerdmg = 1;

var playerdeffence = 1;
var playercritchance = 1;
var playerCritmult = 2;
var enemyhp = 50;
var enemydmg = 1;

//lore and shop
var lore;
var shop;

//currency and level
var gold = 0;
var playerLevel = 1;
 

//funny
var eye = 50;

//images
var sword;
var shield;
var crit;
var critmult;
var healing;

function preload() {
  sword = loadImage("sword.jpg");
  shield = loadImage("sheild.jpg");
  crit = loadImage("crit.jpg");
  critmult = loadImage("critmult.jpg");
  healing = loadImage("healthpotion.jpg");
}


function setup() {
  createCanvas(1600, 835);
  // create the lore paragraph once (not every frame)
  lore = createP("senteced to die in the dungeon,for arson, you kill to extend your life or die trying. press 'a' to attack the enemy.pess 's' to close");
  lore.position(10, 600);
  lore.style('color', 'white');

  

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
  text("player hp:" + playerhp, 100, 20);

//stats display
textSize(32);
text("player dmg:" + playerdmg, 100, 60);
text("player deffence:" + playerdeffence, 100, 100);
text("player crit chance:" + playercritchance + "%", 100, 140);
text("player crit mult:" + playerCritmult + "x", 100, 180);


  text("enemy hp:"+enemyhp, 750, 60);

  text("gold:" + gold, 1400, 20);

  text("level:" + playerLevel, 1400, 100);
 
  text("enemy placeholder", 750, 500);
  // lore is created once in setup()
  textSize(16);
  fill(255, 255, 255);

  
  //lilguy 3
 

 
    
  } 
   if (playerhp <= 0) { 
    textSize(64); 
    fill(255, 0, 0);  
    text("you died lol", 700, 300);
    noLoop();
  }
  //loot
  if (enemyhp <= 0) {
    var lootRoll = int(random(1, 100));
  }else if (lootRoll <= 30) {
      playerdmg = playerdmg + 1;
      image(sword, 50, 100, 100, 100);
    } 
    else if (lootRoll <= 55) {
      playerdeffence = playerdeffence + 1;
      image(shield, 200, 100, 100, 100);
    } 
    else if (lootRoll <= 80) {
      playercritchance = playercritchance + 1;
      image(crit, 350, 100, 100, 100);
    } 
    else if (lootRoll <= 95) {
      playerCritmult = playerCritmult + 0.5;
      image(critmult, 500, 100, 100, 100);
    } 
   
   else if (enemyhp <= 0&& playerhp > 0) {
   enemyhp = 50 + int(random(1, 50)+int(random(1,playerhp)));
   playerhp = playerhp - (enemydmg/playerdeffence);
   enemydmg = enemydmg + int(random(1,5));
    playerLevel = playerLevel + 1;
    playerMaxhp = playerMaxhp + int(random(10,30));
   }

 else  {
      playerhp = min(playerhp + int(random(10, 30)), playerMaxhp);
      image(healing, 650, 100, 100, 100);
    }

// attaking
function keyReleased() {
if (key === "a" || key === "A") {
  // determine if this attack is a critical hit
  if (int(random(1, 100)) <= playercritchance) {
    enemyhp = enemyhp - (playerdmg * playerCritmult);
  } else {
    enemyhp = enemyhp - playerdmg;
  }
}

   //hide lore
   if (key === "s" || key === "S" ) {
  lore.hide();
   }
  
}

