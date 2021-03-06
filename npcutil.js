"use strict";

//function NPCGroup() {
//  this.min = 1;
//  this.max = 1;
//  this.makeup = new Array;
//  this.makeup[0] = { name: "test", min: 1, max: 1 };
//}
//NPCGroup.prototype = new Object;

function Anchor() {
  this.x
  this.y
  this.maxlength;
  this.leashlength;
}
Anchor.prototype = new Object();

var NPCSpecialFuncs = {};

NPCSpecialFuncs["quick"] = function(who, how) {
  var qobj = localFactory.createTile("Quickness");
  qobj.setExpiresTime(-1);
  who.addSpellEffect(qobj);  
}

NPCSpecialFuncs["mirror"] = function(who, how) {
  who.setGraphicArray(PC.getGraphicArray());
  who.gender = PC.gender
  who.npcname = PC.pcname;  
}

NPCSpecialFuncs["light"] = function(who,how) {
  LightEmitting.call(who, how);
}

NPCSpecialFuncs["flamearmor"] = function(who,how) {
  var qobj = localFactory.createTile("FireArmor");
  if (how !== 1) {
    qobj.setPower(how);
  } else {
    qobj.setPower("2d4");
  }
  qobj.setExpiresTime(-1);
  who.addSpellEffect(qobj);  
}

NPCSpecialFuncs["invisible"] = function(who,how) {
  who.invisible = 1;
}

NPCSpecialFuncs["hides"] = function(who,how) {
  var oldgraph = who.getGraphic();
  who.setGraphic(how);
  return oldgraph;
}

NPCSpecialFuncs["courierSurrender"] = function(who,how) {
  var eobj = localFactory.createTile("CourierSurrender");
  who.addSpellEffect(eobj);
}

NPCSpecialFuncs["courierFlee"] = function(who,how) {
  var eobj = localFactory.createTile("CourierFlee");
  who.addSpellEffect(eobj);
}

function TurnMapHostile(map) {
  DebugWrite("combat", "Attacked a friendly! Turning hostile...<br />");
  DU.gameflags.setFlag("karma", DU.gameflags.getFlag("karma") - 10); 
  var localnpcs = map.npcs.getAll();
  $.each(localnpcs, function(idx, val) {
    if (val.getAttitude() === "friendly") {
      val.setAttitude("hostile");
      val.setAggro(1);
      DebugWrite("combat", val.getName() + " (serial: " + val.getSerial() + ") turns hostile!<br />");
    }
  });
}

function Attack(atk, def) {
  var retval = {};
  var type = "melee";
  var rad = 1;
  if (atk.specials.reach) { 
    rad = 2; 
  }
  DebugWrite("combat", "Attacking: reach is " + rad + ", atk coords: " + atk.getx() + ", " + atk.gety() + " ; def coords: " + def.getx() + ", " + def.gety() + ".<br />");
  if (Math.abs(atk.getx() - def.getx()) > rad) { type = "missile";}
  if (Math.abs(atk.gety() - def.gety()) > rad) { type = "missile";}

  var weapon = atk.getEquipment("weapon");
  var loeresult = 0;

  if (type === "missile") {
    // check to see if attacker can use its missile weapon
    var dex = atk.getDex();
    weapon = atk.getEquipment("missile");
    
    if (!weapon) {
      retval["txt"] = "You don't have a missile weapon equipped!";
      retval["fin"] = 0;
      retval["input"] = "&gt;";
      return retval;
    }
    if (dex < weapon.getDexReq()) {
      retval["txt"] = "You are not agile enough to use your weapon!";
      retval["fin"] = 0;
      retval["input"] = "&gt;";
      return retval;
    }
    if (!CanMissileAttack(atk)) {
      retval["txt"] = "Enemy too close. You cannot use your " + weapon.getDesc() + ".";
      retval["fin"] = 0;
      retval["input"] = "&gt;";
      return retval;
    }
    
    var themap = atk.getHomeMap();
      
    loeresult = themap.getLOS(atk.getx(), atk.gety(), def.getx(), def.gety(), 1);
    
    if (loeresult > LOS_THRESHOLD) {
      retval["txt"] = "You cannot attack that target from here.";
      retval["fin"] = 0;
      retval["input"] = "&gt;";
      return retval;
    }
  } 
  
  if (atk.checkType("pc")) {
    retval["txt"] = "Attack " + def.getDesc();
    if (def.getAttitude() === "friendly") {
      // Make it and its friends hostile. 
      TurnMapHostile(def.getHomeMap());
    }
  } else {
    retval["txt"] =  atk.getDesc() + " attacks " + def.getDesc();
    retval["txt"] = retval["txt"].charAt(0).toUpperCase() + retval["txt"].slice(1);
  }
  if (def !== PC) {
    def.setAggro(1);
  }
//  if (debug && debugflags.combat) { dbs.writeln("Attacking: weapon is " + weapon.getName() + "<br />"); }
  DebugWrite("combat", "Attacking: weapon is " + weapon.getName() + "<br />");
  var tohit = atk.getHitChance(type) / 100;
  tohit -= loeresult/2; // harder to hit if foe has cover
//  if (debug && debugflags.combat) { dbs.writeln("Attacking: reducing to-hit chance by " + loeresult/2 + " due to cover<br />"); }
  DebugWrite("combat", "Attacking: reducing to-hit chance by " + loeresult/2 + " due to cover<br />");
  var defense = def.getDefense() / 100;

//  if (debug && debugflags.combat) { dbs.writeln("Atk: " + tohit + "; enemy defense: " + defense + "<br />"); }
  DebugWrite("combat", "Atk: " + tohit + "; enemy defense: " + defense + "<br />");
  tohit = tohit - defense;
  if (tohit < .05) { tohit = .05; }
  
//  if (debug && debugflags.combat) { dbs.writeln("Chance to hit: " + tohit + "<br />"); }
  DebugWrite("combat", "Chance to hit: " + tohit + "<br />");
//  var preanim = PreAnimationEffect(mapref, fromx,fromy,tox,toy,graphic,xoffset,yoffset,destgraphic,destxoffset,destyoffset)
  var dmg = 0;
  if (Math.random() <= tohit) {
    // Hit!
    
    dmg = weapon.rollDamage(atk);
    var snd;
    if (type === "melee") {
      snd = atk.getMeleeHitSound();
    } else {
      snd = atk.getMissileHitSound();
    }
    if (!snd) {
      weapon.getHitSound();
    }
    DUPlaySound(snd);

    if (dmg < 1) { dmg = 1; }  // min dmg 1 on a hit

    var firearmor = def.getSpellEffectsByName("FireArmor");
    if (firearmor) {
      if (IsAdjacent(atk,def)) {
        firearmor.flashback(atk);
      }
    }
    
    if (atk.getOnHit()) {
      var onhits = atk.getOnHit().split(",");
      for (var i=0;i<=onhits.length;i++) {
        if (typeof OnHitFuncs[onhits[i]] === "function") {
          OnHitFuncs[onhits[i]](atk,def,dmg);
        } else {
          DebugWrite("combat", "**Attacker has an On Hit (" + onhits[i] + ") that does not have a function!**<br />");
        }
      }
    }
    // handle onDamaged stuff here
  }
  else { // Miss!
    // animation and sound here, too
    retval["txt"] = retval["txt"] + " - missed!";
    var snd;
    if (type === "melee") {
      snd = atk.getMeleeMissSound();
    } else {
      snd = atk.getMissileMissSound();
    }
    if (!snd) {
      weapon.getMissSound();
    }
    DUPlaySound(snd);
    
  }
  
  // animate attack
  var fromcoords = getCoords(atk.getHomeMap(),atk.getx(), atk.gety());
  var tocoords = getCoords(def.getHomeMap(),def.getx(), def.gety());

//  fromcoords.x += 192;
//  fromcoords.y += 192;
//  tocoords.x += 192;
//  tocoords.y += 192;  

  // get graphic, xoffset, yoffset for graphic
  var ammographic = {};
  var duration = 50;
  var ammoreturn = 0;
  if (type === "missile") { 
    ammographic = weapon.getAmmoGraphic(atk,def); 
    duration = (Math.pow( Math.pow(def.getx() - atk.getx(), 2) + Math.pow (def.gety() - atk.gety(), 2)  , .5)) * 100;
    ammoreturn = weapon.getAmmoReturn();
  }
  else { 
    ammographic.graphic = "spacer.gif";
    ammographic.xoffset = 0;
    ammographic.yoffset = 0;
    ammographic.fired = -1;
  }

  var hitgraphic = {};
  hitgraphic.graphic = "702.gif";
  if (dmg === 0) { hitgraphic.graphic = "700.gif"; }
  hitgraphic.xoffset = 0;
  hitgraphic.yoffset = 0;
  hitgraphic.overlay = "spacer.gif";
  
  var sounds = {};

  AnimateEffect(atk,def,fromcoords,tocoords,ammographic,hitgraphic,sounds, {type:type, duration:duration,ammoreturn:ammoreturn,dmg:dmg,endturn:1,retval:retval});
  
  var tmpval = {};
  tmpval["fin"] = -1;
  tmpval["wait"] = 1;
  return tmpval;
}

function prepareSpellDamage(damsrc, damtar, damval, damtype) {
  var retval = {};
  retval.dmg = Dice.roll(damval);

  if (damtype === "magic") {
    var armor = damtar.getEquipment("armor");
    var resist = 0;
    if (resist) {
      resist = armor.getResist() - damsrc.getReduceResist();
      resist /= 100;
      if (resist < 0) { resist = 0; }
    }    
    if (Math.random() < resist) {
      retval.msg = "RESIST!";
      retval.dmg = Dice.rollmin(damval);
    }
  }

  if (damtype === "physical") {
    var armor = damtar.getEquipment("armor");
    var absorb = 0;
    if (armor) {
      absorb = armor.getAbsorb() - damsrc.getReduceResist();
      absorb /= 100;
      if (absorb < 0) { absorb = 0; }
    }
    retval.dmg = Math.floor(retval.dmg * (1-absorb));
    if (retval.dmg === 0) { retval.dmg = 1; }  // min dmg 1
  } 
  
  if (damtype === "fire") {
    if (damtar.resists.fire) {
      var fireresist = (damtar.resists.fire - damsrc.getReduceResist)/100;
      retval.dmg = retval.dmg * (1-fireresist);
    }
  }
  
  if (damtype === "ice") {
    if (damtar.resists.ice) {
      var iceresist = (damtar.resists.ice - damsrc.getReduceResist)/100;
      retval.dmg = retval.dmg * (1-iceresist);
    }
  }
  
}

function GetCoordsWithOffsets(direction, from, to) {

  var fromdisplace = 10;
  var todisplace = 5;

  var coordsobj = {};
  coordsobj.fromx = from.x;
  coordsobj.fromy = from.y;
  coordsobj.tox = to.x;
  coordsobj.toy = to.y;

  if ((direction === 7) || (direction === 0) || (direction === 1)) {  // north is a component
    coordsobj.fromy -= fromdisplace;
    coordsobj.toy += todisplace;
  }
  if ((direction >= 1) && (direction <= 3)) { // east is a component
    coordsobj.fromx += fromdisplace;
    coordsobj.tox -= todisplace;
  }
  if ((direction >= 3) && (direction <= 5)) { // south is a component
    coordsobj.fromy += fromdisplace;
    coordsobj.toy -= todisplace;
  }
  if ((direction >= 5) && (direction <= 7)) {  // west is a component
    coordsobj.fromx -= fromdisplace;
    coordsobj.fromy += todisplace;
  }

  return coordsobj;
}
  
function GetDamageDescriptor(who) {
  var ratio = who.getHP() / who.getMaxHP();
  if (ratio > .66) { return ("lightly wounded"); }
  if (ratio > .4) { return ("moderately wounded"); }
  if (ratio > .2) { return ("heavily wounded"); }
  return ("deathly wounded");
}

function CanMissileAttack(who) {
  // looks to see if there are adjacent melee enemies
  var enemystring = "";
  if (who.getAttitude() === "friendly") {
    enemystring = "hostile";
  } else if (who.getAttitude() === "hostile") {
    enemystring = "friendly";
  }
  var themap = who.getHomeMap();
  for (var i = -1; i <=1 ; i++) {
    for (var j = -1; j <= 1; j++) {
      var tile = themap.getTile(who.getx() + i, who.gety() + j);
      if (tile != "OoB") { 
        var npcs = tile.getNPCs();
        if (npcs) {
          for (var k=0; k<npcs.length; k++) {
            if (npcs[k].getAttitude() === enemystring) { return 0; }
          }
        }
      }
    }
  }
  return 1;
}

function SetActiveEffects(who) {
  var effects = who.getSpellEffects();
  effects.sort(function(a,b){ if (a.getName() == b.getName()) {
                                return (b.getPower() - a.getPower());
                              } else {
                                if (a.getName() < b.getName()) { return -1; }
                                else return 1;
                              }  } );
                              
  var currname = "";
  for (var i = 0; i < effects.length; i++ ) {
    if (effects[i].getName() === currname) { effects[i].setActive(0); }
    else {
      effects[i].setActive(1);
      currname = effects[i].getName();
    }
  }
}

function RunEffects(who) {
  var effects = who.getSpellEffects();
  if (effects) {
    for (var i=0; i<effects.length; i++) {
      if (effects[i].getActive()) {
        effects[i].onTurn();
      } 
    } 
  }
  
}

function PickOne(fromarray) {
  var roll = Math.floor(Math.random() * fromarray.length);
  return fromarray[roll];
}

function PushOff(what) {
  var dir = 4;
  var themap = what.getHomeMap();
  var locx = what.getx();
  var locy = what.gety();
  var tries = 0;
  while (tries < 8) {
    var tile = themap.getTile(locx,locy);
    var destx = locx;
    var desty = locy;
    if ((dir === 7) || (dir <= 1)) { desty -= 1; }
    if ((dir >= 3) && (dir <= 5)) { desty += 1; }
    if ((dir >= 1) && (dir <= 3)) { destx += 1; }
    if ((dir >= 5) && (dir <= 7)) { destx -= 1; }

    if (tile.canMove(MOVE_WALK, 1)) {   // can walk but ignore NPCs there- this is a rare 
                                        // circumstance where I will stack NPCs
      themap.moveThing(destx, desty, what);
//      if (debug && debugflags.ai) { dbs.writeln("Moving NPC off of exit, in direction " + dir + "<br />"); }
      DebugWrite("combat", "Moving NPC off of exit, in direction " + dir + "<br />");
      return 1;
    }
    tries += 1;
    dir += 1;
    if (dir === 8) { dir = 0; }
  }
//  if (debug && debugflags.ai) { dbs.writeln("Moving NPC off of exit, in emergency backup code.<br />"); }
  DebugWrite("combat", "Moving NPC off of exit, in emergency backup code.<br />");
  themap.moveThing(locx, locy+1, what);
  return 1;
  
}

function Regen(who) {
  if (who.getSpellEffectsByName("Disease")) { return; } 
  
  if (DUTime.getGameClock() > who.nextMana) {
    if (who.getMana() < who.getMaxMana()) {
      who.modMana(1);
    }
    who.nextMana += MANA_REGEN;
  }
  
  // put HP regen here if I decide to include it after all
}

function EarnedLevel(who) { 
  if (who.getLevel === LVL_MAX) { return 0; }
  var needed = Math.pow(2, who.getLevel()-1) * 100;
//  alert(needed);
  if (who.getxp() >= needed) {
    return 1;
  }
  return 0;
}

function SetBandAggro(band, map) {
  var npcs = map.npcs.getAll();
  $.each(npcs, function(idx, val) {
    if (val.getNPCBand() === band) {
      val.setAggro(1);
    }
  });
}

function StepOrDoor(who, where, nopush) {
  var whomap = who.getHomeMap();
  var tile = whomap.getTile(where[0],where[1]);
  if (tile !== "OoB") {
    var fea = tile.getTopFeature();
    if (fea && !(MOVE_WALK & fea.getPassable()) && who.specials["open_door"] && (who.currentActivity !== "WaitHere")) {
      // if there is a feature, that blocks movement, while I can open doors and am not randomwalking
      if (fea.closedgraphic) {
        // Destination tile has a door
        if (!((typeof fea.getLocked === "function") && (fea.getLocked()))) {
          // door is not locked    
          if (!fea.open) {
            // Door is not open- opening
            DebugWrite("ai", "opening a door in StepOrDoor.<br />");
            fea.use(who);
            if (GetDistance(fea.getx(),fea.gety(),PC.getx(),PC.gety(),"square") <= 5) {
              DrawMainFrame("draw",PC.getHomeMap(),PC.getx(),PC.gety());
            } 
            var moved = {canmove:0, opendoor:2, fin:1, diffx: where[0]-who.getx(), diffy: where[1]-who.gety() };
            return moved;  // opened a door, didn't take a step
          }
        }
      } 
    }
    var diffx = where[0] - who.getx();
    var diffy = where[1] - who.gety();
    var moved = who.moveMe(diffx,diffy);
    if (moved["canmove"]) { 
      DebugWrite("ai", "moved in StepOrDoor.<br />");
    } else {
      DebugWrite("ai", "didn't move in StepOrDoor.<br />");
      if (!nopush && fea && who.specials["open_door"]) {
        // If you can open a door, you can move a barrel.
        if (!tile.getTopNPC()) {      
          var allfea = tile.getFeatures();
          var pushyou;
          $.each(allfea, function(idx,val) {
            if (val.pushable) {
              if (!pushyou) { pushyou = val; }
              else {
                if (!(val.getPassable & who.getMovetype())) {
                  pushyou = val;
                }
              }
            }
          });
          if (pushyou) {
            pushyou.pullMe(who);
          }
        }
      }
    }
    return moved;
  }
  // step was off the map somehow, returning can't move
  return {canmove: 0 };
}

function StepOrSidestep(who, path, finaldest, nopush) {
  DebugWrite("ai", "In StepOrSideStep...");
  var moved = StepOrDoor(who,path,nopush);
  if (!moved["canmove"] && !moved["opendoor"]) {
    DebugWrite("ai", " !canmove and !opendoor, trying here.");

    if (who.getCurrentAI() === "scheduled") {
      var tile = who.getHomeMap().getTile(path[0],path[1]);
      if (tile.getTop().checkType("pc")) {
        if (who.pushing) {
          delete who.pushing;
          if ((path[0] === finaldest[0]) && (path[1] === finaldest[1])) {
            // PC is on last step of path, no point to pushing through
            var fea = tile.getTopFeature();
            if (fea && (fea.getName() === "BedHead")) {
              // PC is in your bed. Kick them out.
              npctile = who.getHomeMap().geTile(who.getx(),who.gety());
              PC.getHomeMap().moveThing(who.getx(),who.gety(),PC);
              tile.executeWalkoffs(PC);
              npctile.executeWalkons(PC);
              who.getHomeMap().moveThing(path[0],path[1],who);
              npctile.executeWalkoffs(who);
              tile.executeWalkons(who);
              moved["canmove"] = 1;
              maintext.delayedAddText(who.getFullDesc() + " pushes you out of their bed.");
              DebugWrite("ai", "Kicked PC out of bed.<br />");
              moved["intoPC"] = 1; // dunno if I'll want this, but might as well
              return moved;
            } else {
              // PC is probably in your chair or something. Give up and let them keep it.
              moved["canmove"] = 0;
              moved["intoPC"] = 1;

              return moved;
            }
          } else {
            who.getHomeMap().moveThing(path[0],path[1],who);
            tile.executeWalkons(who);
            // Puts the NPC on the same tile as the player
            // This is necessary, otherwise the player could still block the NPC's path
            // by standing in front of a closed door.
            // Will only come up if path is truly blocked
            moved["canmove"] = 1;
            maintext.delayedAddText(who.getFullDesc() + " steps past you.");
            moved["intoPC"] = 1; // dunno if I'll want this, but might as well
            return moved;
          }
        } else { 
          var gridbackup = who.getHomeMap().getPathGrid(MOVE_WALK_DOOR).clone();
          // destination tile must always be walkable.
          gridbackup.setWalkableAt(finaldest[0],finaldest[1],true);
          
          // so must start tile, for some reason
          gridbackup.setWalkableAt(who.getx(),who.gety(),true);

          gridbackup.setWalkableAt(path[0],path[1],false);
          // make PC not walkable, see what path we get now

          let npcs = who.getHomeMap().npcs.getAll();
          for (let i=0;i<npcs.length;i++) {
            if ((npcs[i].getCurrentAI() === "scheduled") && ((npcs[i].currentActivity !== "RouteTo") && (npcs[i].currentActivity !== "ChangeMap"))) {
              // creating a one-time pathmap that makes NPCs who are not currently moving (RouteTo or ChangeMap)
              gridbackup.setWalkableAt(npcs[i].getx(),npcs[i].gety(),false);
            }
          }
          // make NPCs who are not moving block movement as well      

          // get path
          var foundpath = finder.findPath(who.getx(),who.gety(),finaldest[0],finaldest[1],gridbackup);

          if (!foundpath[0] || ((foundpath.length - path.length) > 9)) {
        
            who.pushing = 1; 
            return moved;
          }
        }
      }
    }
    var diffx = path[0] - who.getx();
    var diffy = path[1] - who.gety();
    var fullx = finaldest[0] - who.getx();
    var fully = finaldest[1] - who.gety();

    if (diffx !== 0) {
      if (fully > 0) { moved = who.moveMe(0,1,1); }
      else if (fully < 0 ) { moved = who.moveMe(0,-1,1); }
      else { 
        var parity = 1;
        if (Dice.roll("1d2") === 1) { 
          parity = -1;
        }
        moved = who.moveMe(0,parity,1); 
      }
    } else {
      if (fullx > 0) { moved = who.moveMe(1,0,1); }
      else if (fullx < 0) { moved = who.moveMe(-1,0,1); }
      else {
        var parity = 1;
        if (Dice.roll("1d2") === 1) {
          parity = -1;
        } 
        moved = who.moveMe(parity,0,1);
      }
    }
  }
  DebugWrite("ai", "<br />");
  return moved;
}

function IsNonliving(who) {
  if (who.specials.undead || who.specials.construct) { return 1;}
  return 0;
}

function ShowTurnFrame(who) {
  let framegraph = "turn-frame-friendly.gif";
  if (who.getAttitude() === "hostile") { framegraph = "turn-frame-enemy.gif"; }

  let coords = getCoords(who.getHomeMap(),who.getx(),who.gety());
  $("#turnframe").css("left",coords.x+16);
  $("#turnframe").css("top",coords.y+16);
  $("#turnframe").attr("src","graphics/frame/"+framegraph);
  $("#turnframe").css("display","block");

  who.hasFrame = 1;
}

function MoveTurnFrame(who) {
  let coords = getCoords(who.getHomeMap(),who.getx(),who.gety());
  $("#turnframe").css("left",coords.x+16);
  $("#turnframe").css("top",coords.y+16);
}

function HideTurnFrame(who) {
  $("#turnframe").css("display","none");

  if (who) {
    delete who.hasFrame;
  }
}

function FindNPCByName(findname, map) {
  let npcs = map.npcs.getAll();
  for (let i=0;i<=npcs.length;i++) {
    if (npcs[i].getNPCName() === findname) { return npcs[i];}
  }
  return 0;
}

function SayNear(sayx,sayy,saymap,saywhat) {
  if (PC.getHomeMap() === saymap) {
    if (GetDistance(sayx,sayy,PC.getx(),PC.gety()) <= 5) {
      maintext.addText(saywhat);
    }
  }
}