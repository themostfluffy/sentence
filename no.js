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
var souls = 0;
var playerLevel = 1;

//loot
var lootRoll = 0;
var lootRolled = false;
var attackRoll = false;
var healRoll = false;
var deffenceRoll = false;
var critRoll = false;
var critmultRoll = false;
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

  text("souls:" + souls, 1400, 20);

  text("level:" + playerLevel, 1400, 100);
 


  // lore is created once in setup()
  textSize(16);
  fill(255, 255, 255);

  
  //lilguy 3
 

 
    
  
   if (playerhp <= 0) { 
    textSize(64); 
    fill(255, 0, 0);  
    text("you died lol", 700, 300);
    noLoop();
  }
  //loot
  if (enemyhp <= 1 && playerhp > 0 && !lootRolled) {
    lootRoll = int(random(1, 100));
    lootRolled = true;
  }
  if (lootRoll <= 30 && !attackRoll) {
      playerdmg = playerdmg + 1;
      attackRoll = true;
    } 
    else if (lootRoll <= 55 && !healRoll) {
      playerdeffence = playerdeffence + 1;
      healRoll = true;

    } 
    else if (lootRoll <= 80 && !critRoll) {
      playercritchance = playercritchance + 1;
      critRoll = true;

    } 
    else if (lootRoll <= 95 && !critmultRoll) {
      playerCritmult = playerCritmult + 0.5;
      critmultRoll = true;
    } 
  if (enemyhp <= 0&& playerhp > 0) {
   enemyhp = 50 + int(random(1, 50)+int(random(1,playerhp)));
   playerhp = playerhp - (enemydmg/playerdeffence);
   enemydmg = enemydmg + int(random(1,5));
    playerLevel = playerLevel + 1;
    playerMaxhp = playerMaxhp + int(random(10,30));
    souls = souls + (int(random(5,20))*playerLevel);

    lootRolled = false;
   }
    text("lootRoll:" + lootRoll, 40, 40);
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

