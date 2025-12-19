//stats
var playerhp = 100;
var playerMaxhp=100
var playerdmg = 1;

var playerdeffence = 1;
var playercritchance = 100;
var playerCritmult = 2;
var enemyhp = 50;
var enemydmg = 1;

var lore;
var shop;

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

  shop = createP("shop");
  shop.position(1300, 500);
  shop.style('color', 'white');

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


  text("enemy hp:"+enemyhp, 750, 60);

  text("gold:" + gold, 1400, 20);

  text("level:" + playerLevel, 1400, 100);
 
  text("enemy placeholder", 750, 500);
  // lore is created once in setup()
  textSize(16);
  fill(255, 255, 255);
// items for shop
  image(sword, 1200, 150, 100, 100);
  text("sword +1 dmg 10 gold", 1300, 200);

 image(shield, 1200, 250, 100, 100);
  text("shield +10 deffence 100 gold", 1300, 300);

  image(crit, 1200, 350, 100, 100);
  text("crit +10 crit chance 100 gold", 1300, 400);

  image(critmult, 1200, 450, 100, 100);
  text("crit mult +10 crit mult 200 gold", 1300, 500);

  image(healing, 1200, 550, 100, 100);
  text("healing potion +50 hp 15 gold", 1300, 600);

  text("crit chance: " + playercritchance, 100, 100);
  text("crit mult: " + playerCritmult, 100, 150);
  text("deffence: " + playerdeffence, 100, 200);
  text("dmg: " + playerdmg, 100, 250);

//shop buying
 
  
  //lilguy 3
 

  if (enemyhp <= 0&& playerhp > 0) {
   enemyhp = 50 + int(random(1, 50)+int(random(1,playerhp)));
   playerhp = playerhp - (enemydmg/playerdeffence);
   enemydmg = enemydmg + int(random(1,5));
    gold = gold + int(random(1,10))*playerLevel;
    playerLevel = playerLevel + 1;
    playerMaxhp = playerMaxhp + int(random(10,30));
    
  } 
   if (mouseIsPressed) {
    //sword
    if (mouseX >= 1200 && mouseX <= 1300 && mouseY >= 150 && mouseY <= 250 && gold >= 10) {
      playerdmg = playerdmg + 1;
      gold = gold - 10;
    }
    //shield
    if (mouseX >= 1200 && mouseX <= 1300 && mouseY >= 250 && mouseY <= 350 && gold >= 100) {
      playerdeffence = playerdeffence + 10;
      gold = gold - 100;
    }
    //crit chance
    if (mouseX >= 1200 && mouseX <= 1300 && mouseY >= 350 && mouseY <= 450 && gold >= 100) {
      playercritchance = playercritchance + 10;
      gold = gold - 100;
    }
    //crit mult
    if (mouseX >= 1200 && mouseX <= 1300 && mouseY >= 450 && mouseY <= 550 && gold >= 200) {
      playerCritmult = playerCritmult + 10;
      gold = gold - 200;
    }
    //healing potion
    if (mouseX >= 1200 && mouseX <= 1300 && mouseY >= 550 && mouseY <= 650 && gold >= 15) {
      playerhp = playerMaxhp;
      if (playerhp < playerMaxhp) {
        playerhp = playerMaxhp;
      }
      gold = gold - 15;
    }
}
}

// attaking
function keyReleased() {
if (key === "a" || key === "A" ) {
 enemyhp = enemyhp - playerdmg;
   } else if (int(random(1,100)) <= playercritchance ) {
 enemyhp = enemyhp - (playerdmg * playerCritmult);
   }

   //hide lore
   if (key === "s" || key === "S" ) {
  lore.hide();
   }
  
}
