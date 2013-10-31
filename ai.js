
// object to make it easier to construct which function to call without
// using eval.

var ais = {};

ais.Bandit = function(who, radius) {
  var retval = {fin: 1};
  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " " + who.getSerial() + " is going.</span><br />"); }
  // First, see if the PC is adjacent and if so, smite.
  if (GetDistance(who.getx(), who.gety(), PC.getx(), PC.gety()) === 1) {
    NPCAttackPCMap(who);
    if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " attacks the PC!</span><br />"); }
    return retval;
  }
  
  // Next, check and see if there is already a path that has not expired
  retval = ais.SurfaceFollowPath(who,40,1);   
  if (retval["fin"] === 1) { return retval; }
  
  // If there is a radius attached, hunt for the PC next
  var hunt = ais.HuntPC(who,radius);

  if (hunt) { 
    retval = ais.SurfaceFollowPath(who,40,1);   
    return retval; // we're done here either way
  }  

  // we have neither attacked, moved, nor hunted- now we look for a PoI to go towards

  return retval;
}


// sub-functions

ais.HuntPC = function(who, radius) {
	// Is the PC within range to be hunted?
	if (GetDistance(who.getx(), who.gety(), PC.getx(), PC.gety()) > radius) {
	  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>PC is not in range to hunt.</span><br />"); }
		return 0;  // no hunting
	}
	
	// if the PC is within a smaller radius (currently radius/3), hunt no matter what.
	// otherwise, check if we can see the PC, with a more forgiving threshold than used
	// in the game display
	if (GetDistance(who.getx(), who.gety(), PC.getx(), PC.gety()) > (radius/3)) {   
    var themap =  who.getHomeMap();
    
    var losresult = themap.getLOS(who.getx(), who.gety(), PC.getx(), PC.gety(), losgrid);
    if (losresult > 2) { 
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>PC is close but not in sight, no hunt.</span><br />"); }
      return 0; 
    }  // can't see the PC and they aren't really close, no hunt
	}
	
	// HUNT!
	// find path to the PC
	var destination = { x: PC.getx(), y: PC.gety() };
	
	destination = CheckTownProximity(destination, who.getHomeMap());  // destination moved away if the target is too near a town.
	
	var dur = Math.floor(Math.random()*3)+5;   // recalc in 5-7 moves, and remember that this turn has not yet moved
	who.setDestination(destination, dur);
	return 1;
	
}

ais.SurfaceFollowPath = function(who, random_nomove, random_tries) {
  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " in SurfaceFollowPath.</span><br />"); }
  var retval = { fin: 0 };
  if ((who.getCurrentPath().length > 0) && (who.getTurnsToRecalcDest() > 0)) {
    var coords = who.getNextStep();
    if (GetDistance(who.getx(), who.gety(), coords[0], coords[1]) === 1) {  // the next step is only a step away
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " moving to " + coords[0] + ", " + coords[1] + " :"); }
      var diffx = coords[0] - who.getx();
      var diffy = coords[1] - who.gety();
      retval = who.moveMe(diffx, diffy, 0);
      if (retval["canmove"] === 1) { // it moved!
        if (debug) { dbs.writeln("successfully.</span><br />"); }
        who.setTurnsToRecalcDest(who.getTurnsToRecalcDest - 1);
        return retval; // we're done here
      }
      // failed to move. On the surface, this means there was another AI there.
      // in scale map, could be a closed door.
      if (debug) { dbs.writeln("unsuccessfully.</span><br />"); }
      
      // if there is another AI in the way, randomwalk
      if (!random_tries) { random_tries = 1; }
      for (var i = 0; i<random_tries; i++) {
        var split_move = (100-random_nomove)/3;
        if (diffx === 1) { retval = ais.Randomwalk(who,split_move,0,split_move,split_move); }
        else if (diffx === -1) { retval = ais.Randomwalk(who,split_move,split_move,split_move,0); }
        else if (diffy === 1) { retval = ais.Randomwalk(who,0,split_move,split_move,split_move); }
        else if (diffy === -1) { retval =  ais.Randomwalk(who,split_move,split_move,0,split_move); }
        else { alert("How did I get here? ais.FollowPath."); }
        if (!retval["nomove"]) { 
          if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>Successful randomwalk.</span><br />"); }
          return retval; 
        }  // moved
      }
      
      //didn't move. Not going to try again. Ending turn.
      retval["fin"] = 1;
      return retval;
      
    } 
    // if next step is more than one step away, a previous move failed, recalculate now
  }
  return retval;
}

ais.Randomwalk = function(who, chance_north, chance_east, chance_south, chance_west) {
  // default values, 25 25 25 25. If it doesn't sum to 100, the remainder is chance_none.
  var retval = { nomove: 0 };
  var diffx = 0;
  var diffy = 0;
  
  if (chance_north + chance_west + chance_east + chance_south  > 100) {
    chance_north = 25;
    chance_south = 25;
    chance_east = 25; 
    chance_west = 25;
  }
  
  var roll = Math.floor(Math.random() * 100)+ 1;
  if (roll <= chance_north) { diffy = -1; }
  else if (roll - chance_north < chance_east) { diffx = 1; }
  else if (roll - chance_north - chance_east < chance_south) { diffy = 1; }
  else if (roll - chance_north - chance_east - chance_south < chance_west) { diffx = -1; }
  
  if (diffx === diffy) {  // which at this point can only happen if we aren't moving
    retval["nomove"] = 1;
    return retval;
  }
  
  retval = who.moveMe(diffx,diffy);
  return retval;
}

function NPCAttackPCMap(npc) {
  var combatmapname = GetCombatMap(npc, PC);
  var newmap = new GameMap();
  newmap.loadMap(combatmapname);
  maps.addMapByRef(newmap);

  PC.getHomeMap().deleteThing(npc);
  var desttile = MoveBetweenMaps(PC,PC.getHomeMap(),newmap, newmap.getEnterX(), newmap.getEnterY());
    
  var monsters = PlaceMonsters(newmap,npc,0);
  DUTime.removeEntityFrom(npc);
    
  DrawMainFrame("draw", PC.getHomeMap().getName() , PC.getx(), PC.gety());
  
  var npcname = npc.getDesc();
  npcname = npcname.charAt(0).toUpperCase() + npcname.slice(1);
  maintext.addText(npcname + " attacks!");
  
  return 1;
}

function CheckTownProximity(coords, map) {
  var mapfeatures = map.features.getAll();  // weirdly, this assumes that all maps this will be run on have features. Probably a safe assumption.
  var town = { x: 0};
  for (var i = 0; i < mapfeatures.length; i++) {
    if ((mapfeatures[i].getName().match(/Town/)) || (mapfeatures[i].getName().match(/Castle/)) || (mapfeatures[i].getName().match(/Keep/)) || (mapfeatures[i].getName().match(/Village/))) {
      while (GetDistance(coords.x, coords.y, mapfeatures[i].getx(), mapfeatures[i].gety()) < 4) {  // your little walk will take you too close to civilization
        var dir = GetDirection(mapfeatures[i].getx(), mapfeatures[i].gety(), coords.x, coords.y);
        if (dir === 0) { coords.y--; }
        else if (dir === 1) { coords.y--; coords.x++ }
        else if (dir === 2) { coords.x++; }
        else if (dir === 3) { coords.x++; coords.y++ }
        else if (dir === 4) { coords.y++; }
        else if (dir === 5) { coords.x--; coords.y++ }
        else if (dir === 6) { coords.x--; }
        else if (dir === 7) { coords.x--; coords.y-- }
        if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>Moving destination away from " + mapfeatures[i].getDesc() + ".</span><br />"); }
        i = 0;
      }
    }
  }
  return coords;
}
