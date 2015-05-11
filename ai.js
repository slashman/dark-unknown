
// object to make it easier to construct which function to call without
// using eval.

var ais = {};

ais.Sentinel = function(who) {
  my destinations = [];
  my jumps = [];
  destinations[0] = ["w","w","n","n","w","w","w","w","w","e","e","e","e","e","e","e","e","e","s","s","s","s","n","n","n","n","w","w","w","w","s","s","e","e"];
  jumps[0] = { 2:31, 6:12, 10:8, 18:25, 23:20, 29:4};
  destinations[1] = ["w","n","w","w","s","s","s","w","w","n","n","n","n","s","s","s","s","e","e","n","n","n","e","e","s","e","s","s","s","s","w","w","w","w","e","e","e","e","s","s","w","w","w","w","s","s","e","e","e","e","w","w","w","w","n","n","e","e","e","e","n","n","w","w","w","w","e","e","e","e","n","n","n","n"];
  jumps[1] = { 11:15,13:13,30:38,36:32,46:54,52:48,62:70,68:64};
  destinations[2] = ["n","n","n","n","n","e","e","e","w","w","w","s","s","s","s","s","s","s","s","e","e","e","e","n","n","w","w","n","n","n","n","s","s","s","s","e","e","s","s""w","w","w","w","n","n","n"];
  jumps[2] = { 1:14,6:10,8:8,13:3,21:41,28:34,32:30,39:23};
  destinations[3] = ["w","w","w","w","w","s","n","e","e","e","e","e","n","n","e","e","s","s","e","e","e","e","e","e","w","w","w","w","w","w","n","n","w","w","s","s"];
  jumps[3] = { 2:10, 8:4, 20:28, 26:22};
  
  // sequence: first, see if player is in front of, if so spend action teleporting player back to center
  //                  (also do this to the player's summoned NPCs if they have one)
  // then, see if path is blocked, if so, if there is a jump, jump to next step without moving
  // if neither of those things happened, take the next step
  
}

ais.Bandit = function(who,radius) {
  var retval = ais.OutdoorHostile(who, radius, "road");
  return retval;
}

ais.Monster = function(who,radius) {
  var retval = ais.OutdoorHostile(who, radius, "wild");
  return retval;
}

ais.OutdoorHostile = function(who, radius, pname) {
  if (!radius) { radius = 0; }
  
  var retval = {fin: 1};
  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " " + who.getSerial() + " is going.</span><br />"); }
  // First, see if the PC is adjacent and if so, smite.
  var locx = PC.getx();
  var locy = PC.gety();
  var pcmap = PC.getHomeMap();
  if (who.getHomeMap() !== pcmap) {
    if (pcmap.getName().match(/combat/)) {
      // if PC is on a combat map, use map's exit coords to determine location
      locx = pcmap.getExitToX();
      locy = pcmap.getExitToY();
    } else {
      locx = 300;
      locy = 300;
      // because these values can never be 1 away via GetDistance
    }
  }
  if (GetDistance(who.getx(), who.gety(), locx, locy) === 1) {
    if (pcmap === who.getHomeMap()) {
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " attacks the PC!</span><br />"); }
      NPCAttackPCMap(who);
      return retval;
    } else { // PC is already in a fight
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " adjacent to PC on world map, waiting its turn.</span><br />"); }
      retval["initdelay"] = .1;
      return retval;
    }
  }
  
  // Next, check to see if it's outside its leash radius (moved to SurfaceFollowPath)
//  var spawner = who.getSpawnedBy();
//  if ((spawner) && ) {
    
//  }
  
  // Next, check and see if there is already a path that has not expired
  // but only if the PC is not within close range- in that case, always wait to hunt
  if ((who.getHomeMap() !== pcmap) || (GetDistance(who.getx(), who.gety(), PC.getx(), PC.gety()) > radius/3)) {
    if (debug) { dbs.writeln("<span style='color:orange;'>PC on another map or not Close. Trying to follow a path.</span><br />"); }
    retval = ais.SurfaceFollowPath(who,40,1);   
    if (retval["fin"] === 1) { return retval; }
  }
  
  // If there is a radius attached, hunt for the PC next
  if (radius) {
    if (debug) { dbs.writeln("<span style='color:orange;'>AI hunts within " + radius + ", hunting for PC.</span><br />"); }
    var hunt = ais.HuntPC(who,radius);

    if (hunt) { 
      if (debug) { dbs.writeln("<span style='color:orange;'>Hunt was successful, trying to follow the path.</span><br />"); }
      retval = ais.SurfaceFollowPath(who,40,1);   
      return retval; // we're done here either way
    }  
  }

  // we have neither attacked, moved, nor hunted- now we look for a PoI to go towards
  if (debug) { dbs.writeln("<span style='color:orange;'>AI " + who.getName() + " has neither attacked, moved, nor hunted- now look for a PoI.</span><br />"); }
  retval = ais.ProcessPoI(who, pname);
  return retval;
}


// sub-functions

ais.HuntPC = function(who, radius) {
  var themap =  who.getHomeMap();
	// Is the PC within range to be hunted?
	var locx = PC.getx();
	var locy = PC.gety();
	if (PC.getHomeMap() !== themap) {
	  var pcmap = PC.getHomeMap();
	  if (pcmap.getName().match(/combat/)) {
	    locx = pcmap.getExitToX();
	    locy = pcmap.getExitToY();
	  } else {
	    // far away so all GetDistance calls fail
	    locx = 300;
	    locy = 300;
	  }
	}
	if ((themap !== PC.getHomeMap()) || (GetDistance(who.getx(), who.gety(), PC.getx(), PC.gety()) > radius)) {
	  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>PC is not in range to hunt.</span><br />"); }
		return 0;  // no hunting
	}
	
	
	// if the PC is within a smaller radius (currently radius/3), hunt no matter what.
	// otherwise, check if we can see the PC, with a more forgiving threshold than used
	// in the game display
	if (GetDistance(who.getx(), who.gety(), locx, locy) > (radius/3)) {   
    
    var losresult = themap.getLOS(who.getx(), who.gety(), locx, locy, losgrid);
    if (losresult > 2) { 
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>PC is within radius but not in sight, no hunt.</span><br />"); }
      return 0; 
    }  // can't see the PC and they aren't really close, no hunt
	}
	
	// HUNT!
	// find path to the PC
	if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>Hunting!</span><br />"); }
	var destination = { x: locx, y: locy };
	
	//destination = CheckTownProximity(destination, who.getHomeMap());  // destination moved away if the target is too near a town.
		
	var path = themap.getPath(who.getx(), who.gety(), destination.x, destination.y, who.getMovetype());
	if (path.length) {
   	path.shift();  // because the furst step is where it is already standing.
    if (debug) { dbs.writeln("<span style='color:purple; font-weight:bold'>From: " + who.getx() + ", " + who.gety() + " to " + destination.x + ", " + destination.y+ "</span><br />"); }
    if (debug) { dbs.writeln("<span style='color:purple; font-weight:bold'>First step is: " + path[0][0] + ", " + path[0][1] + "</span><br />"); }
    if (debug) { dbs.writeln("<span style='color:purple; font-weight:bold'>Next step is: " + path[1][0] + ", " + path[1][1] + "</span><br />"); }
    who.setCurrentPath(path);

    var dur = Math.floor(Math.random()*3)-1; 
    dur = dur + Math.floor(path.length / 3);
    who.setDestination(destination, dur);
    who.setDestinationType("PC");
    
    return 1;
  } else { 
    if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>No available path, hunt abandoned.</span><br />"); }
    return 0;
  }
	
}

ais.SurfaceFollowPath = function(who, random_nomove, random_tries) {
  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " in SurfaceFollowPath.</span><br />"); }
  var retval = { fin: 0 };
  var spawnedby = who.getSpawnedBy();
  var leashpresent = 0;
  if (spawnedby && (spawnedby.getSpawnLeash() || spawnedby.getSpawnSoftLeash())) { leashpresent = 1; }
  
  if ((who.getCurrentPath().length > 0) && (who.getTurnsToRecalcDest() > 0)) {
    var coords = who.getNextStep();
    if (debug) { dbs.writeln("<span style='color:red; font-weight:bold'>Check path distance? My location: " + who.getx() + ", " + who.gety() + ", next step is: " + coords[0] + ", " + coords[1] + ".</span><br />"); }
    if (GetDistance(who.getx(), who.gety(), coords[0], coords[1]) === 1) {  // the next step is only a step away
      var diffx = coords[0] - who.getx();
      var diffy = coords[1] - who.gety();
      var civilized = 0;
      // check to see if move would bring close to a settlement
      if (who.getHomeMap().getScale() === 0) {  // only care about it if on an outdoor map
        if (debug) { dbs.writeln("Checking for civilization proximity."); }
        civilized = CheckTownProximity( { x: coords[0], y: coords[1] }, who.getHomeMap());
        if (civilized) { 
          if (debug) { dbs.writeln(" Civilized!"); }
          retval["canmove"] = 0; 
        }
        if (debug) { dbs.writeln("<br />"); }
      }  
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>AI " + who.getName() + " moving from " + who.getx() + ", " + who.gety() + " to " + coords[0] + ", " + coords[1] + " :"); }      
      who.setTurnsToRecalcDest(who.getTurnsToRecalcDest() - 1);
      var leashed = 0;
      if (leashpresent) {
        var spawndist = GetDistance(coords[0], coords[1], spawnedby.getx(), spawnedby.gety());  // distance from spawner to target location
        if ((who.getDestinationType() === "PC") && (spawndist > spawnedby.getSpawnLeash())) { // chasing the PC, but trying to move beyond leash
          retval["canmove"] = 0;
          leashed = 1;
        } else if (spawndist > spawnedby.getSpawnSoftLeash()) { // doing anything else but threatening to move past soft leash
          retval["canmove"] = 0;
          leashed = 1;
        }
      }
      if (!leashed && !civilized) {  
        retval = who.moveMe(diffx, diffy, 0);
      }
      if (retval["canmove"] === 1) { // it moved!
        retval["fin"] = 1;
        if (debug) { dbs.writeln("successfully. New location: " + who.getx() + ", " + who.gety() + "</span><br />"); }
        if (debug) {
          var tile = who.getHomeMap().getTile(who.getx(), who.gety());
          if (!tile.canMoveHere(MOVE_WALK)) {
            dbs.writeln("<span style='color:orange; font-weight:bold; text-decoration:underline'>AI moved onto a tile that cannot be walked on: " + tile.getTerrain().getName() + ".</span><br />");
          }
        }
        return retval; // we're done here
      }
      // failed to move. On the surface, this means there was another AI there, or it hit its leash.
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
    if (debug) { dbs.writeln("<span style='color:red; font-weight:bold'>Path distant? My location: " + who.getx() + ", " + who.gety() + ", next step is: " + who.getCurrentPath()[0][0] + ", " + who.getCurrentPath()[0][1] + ".</span><br />"); }
  }
  if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>No path to follow. Path length: " + who.getCurrentPath().length + ". Turns: " + who.getTurnsToRecalcDest() + ".</span><br />"); }
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


ais.ProcessPoI = function(who,poiname) {
  var themap = who.getHomeMap();
  if (!who.getPoI().x) {
    if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>" + who.getName() + ", which follows " + poiname + " on map " + themap.getName() + ", has no PoI yet. Searching...</span><br />"); }
    var poi = FindClosestPoI(who.getx(), who.gety(), themap, poiname);
    if (debug) { dbs.writeln("<span style='color:red; font-weight:bold'>Closest PoI: " + poi.x + ", " + poi.y + "</span><br />"); }
    who.setPoI(poi);
    // random scatter the actual destination to near the PoI
    
    var path = [];
    while (path.length === 0) {
      var xval = Math.floor(Math.random()*9)-4 + poi.x;
      var yval = Math.floor(Math.random()*9)-4 + poi.y;
    
      path = themap.getPath(who.getx(), who.gety(), xval, yval, who.getMovetype());
    }
    path.shift();
    var dur = Math.floor(path.length / 3) + Math.floor(Math.random() * 3);
    if (dur > path.length) { dur = path.length; }
    who.setCurrentPath(path);
    who.setDestination({x: xval, y: yval}, dur);
    who.setDestinationType("PoI");
    if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>Set path to: " + xval + ", " + yval + "</span><br />"); }
  } else {
    var coords = who.getCurrentPath()[0];
    if (who.getTurnsToRecalcDest() <= 0) {
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>Path expired, find a new PoI!</span><br />"); }
      var connections = who.getPoI().connections;
      var connind = Math.floor(Math.random() * connections.length);
      var poi = who.getPoI().connections[connind];
      who.setPoI(poi);
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>New PoI coords: " + poi.x + ", " + poi.y + "</span><br />"); }
      var path = [];
      while (path.length === 0) {
        var xval = Math.floor(Math.random()*9)-4 + poi.x;
        var yval = Math.floor(Math.random()*9)-4 + poi.y;
    
        path = themap.getPath(who.getx(), who.gety(), xval, yval, who.getMovetype());
      }
      path.shift();
      var dur = path.length / 3 + Math.floor(Math.random() * 3);
      who.setCurrentPath(path);
      who.setDestination({x: xval, y: yval}, dur);   
      who.setDestinationType("PoI");
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>New path to: " + xval + ", " + yval + "</span><br />"); }
    } else if (GetDistance(who.getx(), who.gety(), coords[0], coords[1]) !== 1) {
      // next step is not adjacent but destination is still valid: find a new path!
      if (debug) { dbs.writeln("<span style='color:orange; font-weight:bold'>Path not expired, but path invalid. Recalculate.</span><br />"); }
      var coords = who.getDestination();
      var path = themap.getPath(who.getx(), who.gety(), coords.x, coords.y, who.getMovetype());
      who.setCurrentPath(path);
    } 
  }
  var retval = ais.SurfaceFollowPath(who,30,1);
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
//  var town = { x: 0};
  for (var i = 0; i < mapfeatures.length; i++) {
    if ((mapfeatures[i].getName().match(/Town/)) || (mapfeatures[i].getName().match(/Castle/)) || (mapfeatures[i].getName().match(/Keep/)) || (mapfeatures[i].getName().match(/Village/))) {
      if (GetDistance(coords.x, coords.y, mapfeatures[i].getx(), mapfeatures[i].gety()) < 4) {  // your little walk will take you too close to civilization
        if (debug) { dbs.writeln("Destination too close to " + mapfeatures[i].getDesc() + ".<br />"); }
        return 1;
      }
    }
  }
  return 0;
}

function FindClosestPoI(xval, yval, themap, poiname) {
  if (!themap.network[poiname]) { alert("Unknown poi network!"); }
  
  var closeind = 0;
  var closest = GetDistance(xval,yval,themap.network[poiname][0].x, themap.network[poiname][0].y);
  
  for (var i=1; i<themap.network[poiname].length; i++) { 
    var ind = GetDistance(xval,yval,themap.network[poiname][i].x, themap.network[poiname][i].y);
    if (ind < closest) { closeind = i; }
  }
  return themap.network[poiname][closeind];
}