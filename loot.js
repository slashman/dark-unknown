
"use strict";

function LootTable() {
 
   this.goldDice = "0";
   this.goldChance = 100; 
   this.linked = 0;  // only has items if there is gold
   
   this.loot = [];  // array of objects with objname, quantity (dice), and chance
   
   this.trap = ""; // blank, never trapped, otherwise, name of a trap group
}
LootTable.prototype = new Object();

LootTable.prototype.getLoot = function() {
  var lootobj = {};
  lootobj.gold = 0;
  lootobj.lootlist = [];  // array of objnames
  var hasgold = 0;
  
  if ((this.goldDice) && (Math.random() <= (this.goldChance/100))) {
    lootobj.gold = Dice.roll(this.goldDice);
    hasgold = 1;
  }
  if (this.loot.length) {
    if ((hasgold) || (!this.linked)) {
      for (var i =0; i<this.loot.length; i++) {
        if (Math.random() <= (this.loot[i].chance / 100)) {
          var lootquant = this.loot[i].quantity;
          var theloot = this.loot[i].objname;
          var quant = Dice.roll(this.loot[i].quantity);
          for (var j=1;j<=quant;j++) {
//            if (theloot.match("_")) {
            if (DULootGroups.treasureTypes[theloot]) {
              lootobj.lootlist[lootobj.lootlist.length] = DULootGroups.rollForTreasure(theloot);
            } else {
              lootobj.lootlist[lootobj.lootlist.length] = theloot;
            }
          }
        }
      }
    }
  }
  return lootobj;
}

  
function LootGroups() {
  this.treasureTypes = {};  // lootgroups
}
LootGroups.prototype = new Object();

LootGroups.prototype.setTreasureType = function(ttype, treasure) {
//  ttype = "group_" + ttype;
  this.treasureTypes[ttype] = [];
  for (var i = 0; i< treasure.length ; i=i+2) {
    for (var j = 1; j<=treasure[i+1]; j++) {
      this.treasureTypes[ttype][this.treasureTypes[ttype].length] = treasure[i];
    }
  }
}

LootGroups.prototype.rollForTreasure = function(ttype) {
  var roll = Math.floor(Math.random() * this.treasureTypes[ttype].length);  
  return this.treasureTypes[ttype][roll];
}


function TrapGroups(dart, acid, gas, explosion, drain, level) {
  this.traps = [dart, acid, gas, explosion, drain];
  this.trapnames = ["dart", "acid", "gas", "explosion", "drain"];
  this.level = level;
}
TrapGroups.prototype = new Object();

TrapGroups.prototype.getTrap = function() {   // returns which trap name and what level
                                              // level is Dex with 50% chance to evade
  var dice = Math.floor(Math.random()*100)+1;
//  if (debug && debugflags.gameobj) { dbs.writeln("Getting a trap: rolled " + dice + "<br />"); }
  DebugWrite("gameobj", "Getting a trap: rolled " + dice + "<br />");
  var i = 0;
  var resp = {};
  resp.level = this.level;
  while ((dice > 0) && (this.traps[i])){
    if (this.traps[i] > dice) {
      resp.trap = this.trapnames[i];
//      if (debug && debugflags.gameobj) { dbs.writeln("Trap is: " + resp.trap + " , level: " + resp.level + "<br />"); }
      DebugWrite("gameobj", "Trap is: " + resp.trap + " , level: " + resp.level + "<br />");
      return resp;
    }
    dice -= this.traps[i];
    i++;
  }
  resp.trap = "";
  return resp; 
}

function SetTraps() {
  var traps = {};
  
  traps["weak"] = new TrapGroups(20,10,0,0,0,12);  // 70% chance of no trap
  traps["medium"] = new TrapGroups(30,20,10,0,0,17); // 40% chance no trap
  traps["strong"] = new TrapGroups(15,15,15,15,15,22); // 25% chance of no trap
  
  return traps;
}

function GetStrongestTrap(loottables) {
  var trap;
  for (var i=0;i<loottables.length;i++) {
    if (DULoot[loottables[i]].trap) {
      if (DULoot[loottables[i]].trap === "strong") { return "strong"; }
      if (DULoot[loottables[i]].trap === "medium") { trap = "medium"; }
      else if ((DULoot[loottables[i]].trap === "weak") && (trap !== "medium")) { trap = "weak"; }
    }
  }
  return trap;
}