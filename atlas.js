
"use strict";

function Atlas() {

  this.key = {
    "WE" : "BlankWhite",   
    "BlankWhite" : "WE",
    "WW" : "Ocean",   
    "Ocean" : "WW",  
    "ww" : "Water",   
    "Water" : "ww",  
    "uu" : "Shallows", 
    "Shallows" : "uu",
    "sW" : "ShadowOcean",   
    "ShadowOcean" : "sW",  
    "sw" : "ShadowWater",   
    "ShadowWater" : "sw",  
    "su" : "ShadowShallows", 
    "ShadowShallows" : "su",
    '^^' : "Mountain", 
    "Mountain" : '^^', 
    '^_' : "MountainPass", 
    "MountainPass" : '^_', 
    '_^' : "NoBlockMountain", 
    "NoBlockMountain" : '_^', 
    '$=' : "LeftCastle", 
    "LeftCastle" : '$=',
    '=$' : "RightCastle", 
    "RightCastle" : '=$', 
    '%%' : "StoneWall", 
    "StoneWall" : '%%',
    'c#' : "Coral",
    "Coral" : 'c#',
    '#%' : "Stone",     
    "Stone": '#%',
    ',%' : "DirtStone",     
    "DirtStone": ',%',
    '#*' : "Mast",  
    "Mast" : '#*',
    '#!' : "Rigging", 
    "Rigging" : '#!',
    '+o' : "Pillar", 
    "Pillar" : '+o',
    'xo' : "PurplePillar", 
    "PurplePillar" : 'xo',
    '::' : "HorizontalCounter", 
    "HorizontalCounter" : '::',
    ':]' : "RightCounter",  
    "RightCounter" : ':]', 
    '[:' : "LeftCounter", 
    "LeftCounter" : '[:',
    '[]' : "CounterBox",  
    "CounterBox" : '[]',
    'BK' : "BlankBlack", 
    "BlankBlack" : 'BK',
    'DK' : "Darkness", 
    "Darkness" : 'DK',
    '##' : "Wall", 
    "Wall" : '##',
    '!#' : "RuinsWall",
    "RuinsWall" : '!#',
    'i#' : "IllusionaryRuinsWall",
    "IllusionaryRuinsWall" : 'i#',
    '~_' : "RuinsWallMidLeftBottomRight",
    "RuinsWallMidLeftBottomRight" : '~_',
    '_~' : "RuinsWallBottomLeftMidRight",
    "RuinsWallBottomLeftMidRight" : '_~',
    '=~' : "RuinsWallTallLeftMidRight",
    "RuinsWallTallLeftMidRight" : '=~',
    '~=' : "RuinsWallMidLeftTallRight",
    "RuinsWallMidLeftTallRight" : '~=',
    '~~' : "RuinsWallMidLeftMidRight",
    "RuinsWallMidLeftMidRight" : '~~',
    '#+' : "ArrowSlit",
    "ArrowSlit" : '#+',
    '#O' : "Window",
    "Window" : '#O',
    '+`' : "WallNE", 
    "WallNE" : '+`',
    '/+' : "WallNW", 
    "WallNW" : '/+',
    '`+' : "WallSW", 
    "WallSW" : '`+',
    '+/' : "WallSE", 
    "WallSE" : '+/', 
    '()' : "VerticalCounter", 
    "VerticalCounter" : '()',
    '(_' : "BottomCounter", 
    "BottomCounter" : '(_',
    '(^' : "TopCounter", 
    "TopCounter" : '(^',
    '!!' : "PlanksNS", 
    "PlanksNS" : '!!',
    's!' : "ShadowPlanksNS", 
    "ShadowPlanksNS" : 's!',
    '__' : "SouthCoast", 
    "SouthCoast" : '__',
    '--' : "NorthCoast", 
    "NorthCoast" : '--',
    '-b' : "NorthCoastSand", 
    "NorthCoastSand" : '-b',
    '.|' : "EastCoast", 
    "EastCoast" : '.|',
    '|.' : "WestCoast", 
    "WestCoast" : '|.',
    '.`' : "NortheastCoast", 
    "NortheastCoast" : '.`',
    'b`' : "NortheastCoastSand", 
    "NortheastCoastSand" : 'b`',
    '`.' : "SouthwestCoast", 
    "SouthwestCoast" : '`.', 
    '/.' : "NorthwestCoast", 
    "NorthwestCoast" : '/.',
    '/b' : "NorthwestCoastSand", 
    "NorthwestCoastSand" : '/b',
    './' : "SoutheastCoast", 
    "SoutheastCoast" : './',
    's_' : "ShadowSouthCoast", 
    "ShadowSouthCoast" : 's_',
    's-' : "ShadowNorthCoast", 
    "ShadowNorthCoast" : 's-',
    's|' : "ShadowEastCoast", 
    "ShadowEastCoast" : 's|',
    '|s' : "ShadowWestCoast", 
    "ShadowWestCoast" : '|s',
    's`' : "ShadowNortheastCoast", 
    "ShadowNortheastCoast" : 's`',
    '`s' : "ShadowSouthwestCoast", 
    "ShadowSouthwestCoast" : '`s', 
    '/s' : "ShadowNorthwestCoast", 
    "ShadowNorthwestCoast" : '/s',
    's/' : "ShadowSoutheastCoast", 
    "ShadowSoutheastCoast" : 's/',
    '++' : "Cobblestone", 
    "Cobblestone" : '++',
    '-=' : "PlanksEW", 
    "PlanksEW" : '-=',
    '..' : "Grass", 
    "Grass" : '..',
    'ss' : "ShadowGrass", 
    "ShadowGrass" : 'ss',
    '.,' : "Dirt", 
    "Dirt" : '.,',
    'FF' : "FallowFarm",
    "FallowFarm" : 'FF',
    'gF' : "Farm",
    "Farm" : 'gF',
    's,' : "ShadowDirt", 
    "ShadowDirt" : 's,',
    ',,' : "Brush", 
    "Brush" : ',,',
    'u,' : "Underbrush", 
    "Underbrush" : 'u,',
    ',s' : "ShadowBrush",
    "ShadowBrush" : ',s',
    ',|' : "BrushECoast",
    "BrushECoast" : ',|',
    '|,' : "BrushWCoast",
    "BrushWCoast" : '|,',
    '_,' : "BrushSCoast",
    "BrushSCoast" : '_,',
    '-,' : "BrushNCoast",
    "BrushNCoast" : '-,',
    ';;' : "Forest", 
    "Forest" : ';;',
    ',;' : "Grove", 
    "Grove" : ',;',
    's;' : "ShadowGrove", 
    "ShadowGrove" : 's;',
    '|;' : "ForestWCoast",
    "ForestWCoast" : '|;',
    ';|' : "ForestECoast",
    "ForestECoast" : ';|',
    '_;' : "ForestSCoast",
    "ForestSCoast" : '_;',
    '-;' : "ForestNCoast",
    "ForestNCoast" : '-;',
    'nn' : "Hills", 
    "Hills" : 'nn',
    '+*' : "PurpleCobblestone", 
    "PurpleCobblestone" : '+*',
    '+S' : "ShadowPurpleCobblestone", 
    "ShadowPurpleCobblestone" : '+S',
    'p*' : "FancyFloor",
    "FancyFloor" : 'p*',
    'ff' : "Swamp", 
    "Swamp" : 'ff',
    'sf' : "ShadowSwamp", 
    "ShadowSwamp" : 'sf',
    'RR' : "River",
    "River" : 'RR',
    'rd' : "Road",
    "Road" : 'rd',
    'rf' : "Shingles",
    "Shingles" : 'rf',
    'rc' : "ShinglesTop",
    "ShinglesTop" : 'rc',
    'sb' : "SeeBelow",
    "SeeBelow" : 'sb',
    'wb' : "WorldBelow",
    "WorldBelow" : 'wb',
    'cf' : "CaveFloor",
    "CaveFloor" : 'cf',
    'cw' : "CaveWall",
    "CaveWall" : 'cw',
    'hf' : "HexFloor",
    "HexFloor" : 'hf',
    'ht' : "HexTransparentFloor",
    "HexTransparentFloor" : 'ht',
    'bb' : "BlueTiles",    
    "BlueTiles" : 'bb',
    'go' : "GoldOutlineFloor",    
    "GoldOutlineFloor" : 'go',
    'df' : "DiamondFloor",    
    "DiamondFloor" : 'df',
    'bd' : "BlueDiamondFloor",    
    "BlueDiamondFloor" : 'bd',
    'pd' : "PurpleDiamondFloor",    
    "PurpleDiamondFloor" : 'pd',
    'r^' : "RedDiamondFloor",    
    "RedDiamondFloor" : 'r^',
    'yd' : "YellowDiamondFloor",    
    "YellowDiamondFloor" : 'yd',
    'gd' : "GreenDiamondFloor",    
    "GreenDiamondFloor" : 'gd',
    'br' : "Banner",
    "Banner" : 'br',
    'r1' : "RedCarpetNW",
    "RedCarpetNW" : 'r1',
    'r2' : "RedCarpetN",
    "RedCarpetN" : 'r2',
    'r3' : "RedCarpetNE",
    "RedCarpetNE" : 'r3',
    'r4' : "RedCarpetE",
    "RedCarpetE" : 'r4',
    'r5' : "RedCarpetSE",
    "RedCarpetSE" : 'r5',
    'r6' : "RedCarpetS",
    "RedCarpetS" : 'r6',
    'r7' : "RedCarpetSW",
    "RedCarpetSW" : 'r7',
    'r8' : "RedCarpetW",
    "RedCarpetW" : 'r8',
    'r0' : "RedCarpetC",
    "RedCarpetC" : 'r0',
    'b1' : "BlueCarpetNW",
    "BlueCarpetNW" : 'b1',
    'b2' : "BlueCarpetN",
    "BlueCarpetN" : 'b2',
    'b3' : "BlueCarpetNE",
    "BlueCarpetNE" : 'b3',
    'b4' : "BlueCarpetE",
    "BlueCarpetE" : 'b4',
    'b5' : "BlueCarpetSE",
    "BlueCarpetSE" : 'b5',
    'b6' : "BlueCarpetS",
    "BlueCarpetS" : 'b6',
    'b7' : "BlueCarpetSW",
    "BlueCarpetSW" : 'b7',
    'b8' : "BlueCarpetW",
    "BlueCarpetW" : 'b8',
    'b0' : "BlueCarpetC",
    "BlueCarpetC" : 'b0',
  }

}

Atlas.prototype.keylookup = function(entry) {
  if (this.key[entry]) {  return this.key[entry];  }
  else {alert("Key lookup unsuccessful for " + entry); return 0; }

}

// Page object- condensed map

function Acre() {

  this.terrain = "";
  this.features = new Collection();
  this.npcs = new Collection();
  this.pcs = new Collection();
  
//  AssignSerial.call(this);
  this.localLight = {};
  this.localSound = {};
  this.topSound = "";
}

Acre.prototype.addLocalSound = function(snd, sndsrc) {
  this.localSound[sndsrc.getSerial()] = snd;
  this.topSound = sndsrc.getSerial();
  DebugWrite("sound", "Added " + snd + " sound to this acre.<br />");
}

Acre.prototype.removeLocalSound = function(sndsrc) {
  delete this.localSound[sndsrc.getSerial()];
  if (this.topSound === sndsrc.getSerial()) {
    var newsnd = "";
    $.each(this.localSound, function(idx,val) {
      newsnd = idx;
    });
    this.topSound = newsnd;
  }
  DebugWrite("sound", "Removed " + snd + " sound from this acre.<br />");
}

Acre.prototype.getLocalSound = function() {
  if (this.topSound) {
    return this.localSound[this.topSound];
  }
  else return "";
}

Acre.prototype.addLocalLight = function(lightsource, lightlevel, map) {
  // lightlevel is always an object, might not have ne,nw,etc, always has center
  this.localLight[lightsource.getSerial()] = lightlevel;
	map.lightsList[lightsource.getSerial()] = lightsource;
//	if (debug && debugflags.light) { dbs.writeln("LIGHT " + lightsource.getSerial() + ": Added to this acre."); }
	DebugWrite("light", "LIGHT " + lightsource.getSerial() + ": Added to this acre.<br />");
}

Acre.prototype.getLocalLight = function(dir) {
  var lightlevel = 0 ;
  if (dir) {
    for (var i in this.localLight) {
      lightlevel += this.localLight[i][dir];
    }
  } else {
	  for (var i in this.localLight) {
		  lightlevel += this.localLight[i]["center"];
    }
  }
	return lightlevel;
}

Acre.prototype.getLocalLightFrom = function(viewer) {
  alert("IN OTHERWISE EMPTY FUNCTION getLocalLightFrom");
}

Acre.prototype.removeLocalLight = function(source) {
	delete this.localLight[source];
}

Acre.prototype.getBlocksLOS = function(dist) {
	var maxLOS = 0;
	maxLOS = this.terrain.getBlocksLOS(dist);
	var allFeatures = this.features.getAll();
	if (allFeatures[0]) {
		for (var i = 0; i < allFeatures.length; i++ ) {
			var featureLOS = allFeatures[0].getBlocksLOS(dist);
			if (featureLOS > maxLOS) {
				maxLOS = featureLOS;
			}
		}
	}
	return maxLOS;
}

Acre.prototype.getBlocksLOE = function(dist) {
	var maxLOS = 0;
	maxLOS = this.terrain.getBlocksLOE(dist);
	var allFeatures = this.features.getAll();
	if (allFeatures[0]) {
		for (var i = 0; i < allFeatures.length; i++ ) {
			var featureLOS = allFeatures[0].getBlocksLOE(dist);
			if (featureLOS > maxLOS) {
				maxLOS = featureLOS;
			}
		}
	}
	return maxLOS;
}

Acre.prototype.getFeatures = function() {
	return (this.features.getAll());
}

Acre.prototype.getTopFeature = function() {
	return (this.features.getTop());
}

Acre.prototype.getFeatureByName = function(featurename) {
  return (this.features.getByName(featurename));
}

Acre.prototype.getTopVisibleFeature = function() {
	var features = this.features.getAll();
	var ind = features.length;
	if (ind === 0) { return; }
	while (ind > 0) {
		if (features[ind-1].invisible) {
			ind--;
		}
		else {
			return features[ind-1];
		}
	}
	return;
}

Acre.prototype.getNPCs = function() {
	return (this.npcs.getAll());
}

Acre.prototype.getTopNPC = function() {
	return (this.npcs.getTop());
}

Acre.prototype.getTopVisibleNPC = function() {
	var npcs = this.npcs.getAll();
	var ind = npcs.length;
	if (ind === 0) { return; }
	while (ind > 0) {
		if (npcs[ind-1].invisible) {
			ind--;
		}
		else {
			return npcs[ind-1];
		}
	}
	return;
}

Acre.prototype.getPCs = function() {
	return (this.pcs.getAll());
}

Acre.prototype.getTopPC = function() {
	return (this.pcs.getTop());
}

Acre.prototype.getTerrain = function() {
	return this.terrain;
}

Acre.prototype.getTop = function(nopc, sortnpctotop) {
  var toptile;
  if (!sortnpctotop) {
  	if (this.getTopPC() && !nopc) {
    	toptile = this.getTopPC();
    } else if (this.getTopVisibleNPC()) {
    	toptile = this.getTopVisibleNPC();
    } else if (this.getTopVisibleFeature()) {
    	toptile = this.getTopVisibleFeature();
    } else { toptile = this.getTerrain(); }
  } else {
    if (this.getTopVisibleNPC()) {
    	toptile = this.getTopVisibleNPC();
    } else if (this.getTopPC() && !nopc) {
      toptile = this.getTopPC();
    } else if (this.getTopVisibleFeature()) {
    	toptile = this.getTopVisibleFeature();
    } else { toptile = this.getTerrain(); }
  }

	return toptile;
}

Acre.prototype.getBumpIntoResult = function(mover) {
	var terrain = this.getTerrain();
	var retval = terrain.bumpinto(mover);

	if (retval["msg"] != "") { retval["msg"] = " - " + retval["msg"]; }	
	if (retval["canmove"] === 0) { return retval; }
	
	var features = this.getFeatures();
	if (features[0]) {
		for (var i=0; i<features.length; i++) {
			var retval2 = features[i].bumpinto(mover);
			if (retval2["msg"] != "") {
				if (retval["msg"] == "") { retval["msg"] = " - " + retval2["msg"]; }
				else { retval["msg"] += "\n" + retval2["msg"]; }
			}
			if (retval2["canmove"] === 0) { 
			  retval["canmove"] = 0;
			  return retval; 
			}
		}
	}
	
	return retval;
}

Acre.prototype.getInitDelay = function(mob) {
	if (mob.getMovetype() & MOVE_FLY) {
		return 1;
	}
	var terrain = this.getTerrain();
	var features = this.getFeatures();
	var initdelay = terrain.getInitDelay();
	if (features[0]) {
		for (var i = 0; i < features.length; i++) {
			initdelay = initdelay * features[i].getInitDelay();
		}
	}
	if (initdelay) { return initdelay; }
	return 1;
}

// if nonpcs is true, this will return false if there is an NPC blocking movement. If it's false/missing, this ignores NPCs.
Acre.prototype.canMoveHere = function(movetype, nonpcs) {
	var terrain = this.getTerrain();
	var totalpassability = terrain.getPassable();
	var retval = {};
	
  var doors = 0;
  if (movetype & MOVE_WALK_DOOR) { 
    movetype -= MOVE_WALK; 
    doors = 1;
  }
  
	var featurepassability = MOVE_FLY + MOVE_SWIM + MOVE_ETHEREAL + MOVE_LEVITATE + MOVE_WALK;
	var features = this.getFeatures();
	if (features[0]) {
	  for (var i=0; i< features.length; i++) {
	    if (doors && (((features[i].opengraphic) && (!features[i].locked)) || (features[i].pushable))) {
	      // skip doors and things that can be pushed for this check
	    } else {
		    featurepassability = featurepassability & features[i].getPassable();
		  }
		}  
		if (!nonpcs) {
		  var npcs = this.getNPCs();
	    if (npcs[0]) {
	  	  featurepassability = 0;
      }
      var pcs = this.getPCs();
      if (pcs[0]) {
	  	  featurepassability = 0;
      }
    }
		if (totalpassability & MOVE_SWIM) {
//	  	if (featurepassability & mover.getMovetype()) {
	  	if (featurepassability & movetype) {
	  		retval["canmove"] = 1;
  			retval["msg"] = "";
			  return retval;
		  }
	  }
	}
	if (!nonpcs) {
	  var npcs = this.getNPCs();
    if (npcs[0]) {
      featurepassability = 0;
    }
    var pcs = this.getPCs();
    if (pcs[0]) {
	   featurepassability = 0;
    }    
  }
//	if (totalpassability & featurepassability & mover.getMovetype()) {
  if (totalpassability & featurepassability & movetype) {
		retval["canmove"] = 1;
		retval["msg"] = "";
		return retval;
	}
	
	retval["canmove"] = 0;
	retval["msg"] = "Blocked!";
	return retval;
}

Acre.prototype.getPathWeight = function(civ) {
  var pathweight = this.getTerrain().getPathWeight(civ);
  var fea = this.getFeatures();
  $.each(fea, function(idx,val) {
    pathweight += val.getPathWeight(civ);
  });
  return pathweight;
};

Acre.prototype.executeWalkons = function(walker) {
	var terrain = this.getTerrain();
	var response = "";
	if (typeof terrain.walkon === "function") {
    var resp = terrain.walkon(walker);
    if (resp) {
      response += resp;
    }
	}
	var features = this.getFeatures();
	if (features) {
		for (var i = 0; i < features.length; i++) {
			if (typeof features[i].walkon === "function") {
				var resp = features[i].walkon(walker);
				if (resp) {
				  if (response) { response += "<br />"; }
				  response += resp;
        }
			}
		}
	}
	return response;
}

Acre.prototype.executeWalkoffs = function(walker) {
	var terrain = this.getTerrain();
	var response = "";
	if (typeof terrain.walkoff === "function") {
    var resp = terrain.walkoff(walker);
    if (resp) {
      response += resp;
    }
	}
	var features = this.getFeatures();
	if (features) {
		for (var i = 0; i < features.length; i++) {
			if (typeof features[i].walkoff === "function") {
				var resp = features[i].walkoff(walker);
				if (resp) {
				  if (response) { response += "<br />"; }
				  response += resp;
				}
			}
		}
	}
	return response;
}

Acre.prototype.executeIdles = function(walker) {
	var terrain = this.getTerrain();
	var response = "";
	if (typeof terrain.idle === "function") {
		var resp = terrain.idle(walker);
		if (resp) { response += resp; }
	}
	var features = this.getFeatures();
	if (features) {
		for (var i = 0; i < features.length; i++) {
			if (typeof features[i].idle === "function") {
				var resp = features[i].idle(walker);
				if (resp) {
				  if (response) { response += "<br />"; }
				  resp += response;
				}
			}
		}
	}
	return response;
}

Acre.prototype.isHostileTo = function(who) {
  if (this.getTerrain().isHostileTo(who)) { return 1; }

  var fea = this.getFeatures();
  if (fea) {
    for (var i = 0; i < fea.length; i++) {
      if (fea[i].isHostileTo(who)) { return 1; }
    }
  }

  return 0;
}

// Map Object - one per map.

function GameMap() {

  this.data = [];
// Each entry in the array will be an Object with .terrain, .features, and .npcs

  this.enterx = 65;
  this.entery = 70;
  this.name = "";  

  this.features = new Collection();  // list of all features on the map
  this.npcs = new Collection(); // list of all NPCs on the map
  this.pcs = new Collection(); // list of all PCs on the map - usually one, but support exists for parties
// these three will be maintained concurrently with collections on individual tiles/acres

  this.desc = "";
  this.music = "";
  this.exitTo = {};
  this.exitTo.mapname = "darkunknown";
  this.exitTo.x = 65;
  this.exitTo.y = 70;
  this.wraps = 0;
  
  this.returnmap = "darkunknown";
  this.returnx = 27;
  this.returny = 43;
  this.returninfused = 0;
  
  this.linkedMaps = [];
  this.seeBelow = "";
  
  this.lightLevel = "bright";
  this.alwaysRemember = 0;
  this.scale = 1;
  this.backgroundimage = '';
  this.underground = 0;
  this.undergroundDesc = "";
  this.noiseSources = {};
  this.savename = '';
  
  this.exitScript = "";
  this.exitTestScript = "";
  this.enterScript = "";
  this.enterTestScript = "";
  this.pathGrid = {};
  this.network = [];
  this.opacity = .6;
  
  this.lightsList = {};
  this.soundList = {};
}
GameMap.prototype = new Object();

GameMap.prototype.getNPCsAndPCs = function() {
  var alltargets = this.npcs.getAll();
  alltargets.push(PC);
  return alltargets;
}

GameMap.prototype.setName = function(name) {
  this.name = name;
  return this.name;
}

GameMap.prototype.getName = function() {
  return this.name;
}

GameMap.prototype.setDesc = function(desc) {
  this.desc = desc;
  return this.desc;
}

GameMap.prototype.getDesc = function() {
  return this.desc;
}

GameMap.prototype.setOpacity = function(newo) {
  this.opacity = newo;
  return this.opacity;
}

GameMap.prototype.getOpacity = function() {
  return this.opacity;
}

GameMap.prototype.setBackground = function(bgimg) {
  this.backgroundimage = bgimg;
  return this.backgroundimage;
}

GameMap.prototype.getBackground = function() {
  return this.backgroundimage;
}

GameMap.prototype.setUnderground = function(ug) {
  if (parseInt(ug)) {
    this.underground = 1;
  }
  return this.underground;
}

GameMap.prototype.getUnderground = function() {
  return this.underground;
}

GameMap.prototype.setUndergroundDesc = function(desc) {
  this.undergroundDesc = desc;
}

GameMap.prototype.getUndergroundDesc = function() {
  if (this.undergroundDesc) {
    return this.undergroundDesc;
  }
  return "";
}

GameMap.prototype.setSaveName = function(newname) {
  this.savename = newname;
}

GameMap.prototype.getSaveName = function() {
  return this.savename;
}

GameMap.prototype.setScale = function(newscale) {
  if (newscale) { this.scale = parseInt(newscale); }
//  this.scale = newscale;
  return this.scale;
}

GameMap.prototype.getScale = function() {
  return this.scale;
}

GameMap.prototype.setMusic = function(music) {
  this.music = music;
  return this.music;
}

GameMap.prototype.getMusic = function() {
  return this.music;
}

GameMap.prototype.setEnterX = function(x) {
  if (x) { this.enterx = parseInt(x); }
//  this.enterx = x;
  return this.enterx;
}

GameMap.prototype.getEnterX = function() {
  return this.enterx;
}

GameMap.prototype.setEnterY = function(y) {
  if (y) { this.entery = parseInt(y); }
//  this.entery = y;
  return this.entery;
}

GameMap.prototype.getEnterY = function() {
  return this.entery;
}

GameMap.prototype.setExitToMap = function(name) {
  this.exitTo.mapname = name;
  return this.exitTo.mapname;
}

GameMap.prototype.getExitToMap = function() {
  return this.exitTo.mapname;
}

GameMap.prototype.setExitToX = function(x) {
  if (x) { this.exitTo.x = parseInt(x); }
//  this.exitTo.x = x;
  return this.exitTo.x;
}

GameMap.prototype.getExitToX = function() {
  return this.exitTo.x;
}

GameMap.prototype.setExitToY = function(y) {
  if (y) { this.exitTo.y = parseInt(y); }
//  this.exitTo.y = y;
  return this.exitTo.y;
}

GameMap.prototype.getExitToY = function() {
  return this.exitTo.y;
}

GameMap.prototype.setWrap = function(wrap) {
  this.wrap = wrap;
  return this.wrap;
}

GameMap.prototype.getWrap = function() {
  return this.wrap;
}

GameMap.prototype.getReturnMap = function() {
  return this.returnmap;
}

GameMap.prototype.getReturnx = function() {
  return this.returnx;
}

GameMap.prototype.getReturny = function() {
  return this.returny;
}

GameMap.prototype.setReturn = function(newmap, rx, ry) {
  this.returnmap = newmap;
  this.returnx = parseInt(rx);
  this.returny = parseInt(ry);
  return this.returnmap;
}

GameMap.prototype.getReturnInfused = function() {
  return parseInt(this.returninfused);
}

GameMap.prototype.setReturnInfused = function(infused) {
  if (parseInt(infused)) {
    this.returninfused = 1;
  } else {
    this.returninfused = 0;
  }
  return this.returninfused;
}

// This should not be used externally
GameMap.prototype.setTile = function(x,y,tile) {
  this.data[y][x] = tile;
  return this.data[y][x];
}

GameMap.prototype.getTile = function(x,y) {  // returns an Acre
	if ((y < 0) || (x < 0)) { return "OoB"; }
	if (y >= this.data.length) { return "OoB"; }
	if (x >= this.data[y].length) { return "OoB"; }
  return this.data[y][x];
}

GameMap.prototype.getLinkedMaps = function() {
	return this.linkedMaps;
}

GameMap.prototype.setLinkedMaps = function(maplist) {
	maplist = maplist.replace(" ","");
	this.linkedMaps = maplist.split(",");
}

GameMap.prototype.setLinkedMapsArray = function(maplist) {
	this.linkedMaps = maplist;
}

GameMap.prototype.getAlwaysRemember = function() {
	return this.alwaysRemember;
}

GameMap.prototype.setAlwaysRemember = function(ar) {
  if (ar) { this.alwaysRemember = parseInt(ar); }
//	this.alwaysRemember = ar;
}

GameMap.prototype.getSeeBelow = function() {
	return this.seeBelow;
}

GameMap.prototype.setSeeBelow = function(mapname) {
	this.seeBelow = mapname;
}

GameMap.prototype.getLightLevel = function() {
	return this.lightLevel;
}

GameMap.prototype.setLightLevel = function(lightlevel) {
	this.lightLevel = lightlevel;
}

GameMap.prototype.getAmbientLight = function() {
  if (this.getLightLevel() === "bright") { return 1; }
  if (this.getLightLevel() === "cycle") {
    var sunlight = 0;
    if (CheckTimeBetween("6:00","17:59")) {
      sunlight = 1;
    } else if (CheckTimeBetween("18:00","18:59") || CheckTimeBetween("5:00","5:59")) {
      sunlight = .7;
    }
    return sunlight;
  } else {
    return 0;
  }
}

GameMap.prototype.getExitScript = function() {
	return this.exitScript;
}

GameMap.prototype.setExitScript = function(es) {
	this.exitScript = es;
}

GameMap.prototype.getExitTestScript = function() {
	return this.exitTestScript;
}

GameMap.prototype.setExitTestScript = function(es) {
	this.exitTestScript = es;
}

GameMap.prototype.getEnterScript = function() {
	return this.enterScript;
}

GameMap.prototype.setEnterScript = function(es) {
	this.enterScript = es;
}

GameMap.prototype.getEnterTestScript = function() {
	return this.enterTestScript;
}

GameMap.prototype.setEnterTestScript = function(es) {
	this.enterTestScript = es;
}

GameMap.prototype.getPathGrid = function (movetype) {
  return this.pathGrid[movetype];
}

GameMap.prototype.createPathGrid = function() {
  this.pathGrid[MOVE_WALK] = new PF.Grid(this.getWidth(), this.getHeight());
  this.pathGrid[MOVE_SWIM] = new PF.Grid(this.getWidth(), this.getHeight());
  this.pathGrid[MOVE_LEVITATE] = new PF.Grid(this.getWidth(), this.getHeight());
  this.pathGrid[MOVE_FLY] = new PF.Grid(this.getWidth(), this.getHeight());
  this.pathGrid[MOVE_ETHEREAL] = new PF.Grid(this.getWidth(), this.getHeight());
  this.pathGrid[MOVE_WALK_DOOR] = new PF.Grid(this.getWidth(), this.getHeight());
  for (var i=0; i<this.getWidth(); i++) {
    for (var j=0; j<this.getHeight(); j++) {
      var thisspot = this.getTile(i,j);
      for (var k=1; k<=32; k=k*2) {
        var response = thisspot.canMoveHere(k, 1);
        if (!response["canmove"]) { this.setWalkableAt(i,j,false,k); }
        var pathweight;
        if (k===32) { pathweight = thisspot.getPathWeight("civilized"); }
        else { pathweight = thisspot.getPathWeight(); }
        if (!pathweight) { pathweight = 0; }
        this.setCostAt(i,j,pathweight,k);
      }
    }
  }
}

GameMap.prototype.getPath = function(fromx,fromy,tox,toy,movetype) {
  if (!movetype) { alert("getPath called with no movetype"); }
  
  var gridbackup = this.getPathGrid(movetype).clone();
  // destination tile must always be walkable.
  gridbackup.setWalkableAt(tox,toy,true);
  
  // so must start tile, for some reason
  gridbackup.setWalkableAt(fromx,fromy,true);
  
  // get path
  var foundpath = finder.findPath(fromx,fromy,tox,toy,gridbackup);
  
  return foundpath;
}

GameMap.prototype.setWalkableAt = function(x,y,canwalk,movetype) {
  this.pathGrid[movetype].setWalkableAt(x,y,canwalk);
}

GameMap.prototype.setCostAt = function(x,y,cost,movetype) {
  this.pathGrid[movetype].setCostAt(x,y,cost);
}


// generate the tile from the factory first, then pass it to setTerrain
GameMap.prototype.setTerrain = function(x,y,terrain) {
  // hopefully usually called by click on the map
//  var tile = localFactory.createTile(terrain.name);
  var tile = eidos.getForm(terrain.getName());
  if (tile) {
    this.data[y][x] = new Acre();
    this.data[y][x].terrain = tile;
    return this.data[y][x].terrain;
  }
  return 0;
  
}

GameMap.prototype.getWidth = function() {
	return this.data[0].length;
}

GameMap.prototype.getHeight = function() {
	return this.data.length;
}

GameMap.prototype.resizeMap = function(newx,newy,anchor){
  var oldx = this.getWidth();
  var oldy = this.getHeight();
//  if (debug && debugflags.map) {
//    dbs.writeln(oldx + " " + oldy + " to " + newx + " " + newy + ", anchor is " + anchor + "<br><br>");
//  }
  DebugWrite("map", oldx + " " + oldy + " to " + newx + " " + newy + ", anchor is " + anchor + "<br><br>");
  var tile = new Acre();
  tile.terrain = localFactory.createTile(selectionval.name);

  if ((newx) && (newx != oldx)) {
    for (var i = 1; i <= Math.abs(newx-oldx); i++) {
      for (var j=0;j<this.data.length;j++) {
        if ((anchor === 0) || (anchor === 3) || (anchor === 6)) {
          if (newx > oldx) {  
            this.data[j].push(tile);  
          }
          else if (oldx > newx ) { 
            this.data[j].pop();
          }
        }
        else if ((anchor === 2) || (anchor === 5) || (anchor === 8)) {
          if (newx > oldx) { 
            this.data[j].unshift(tile); 
          }
          else if (oldx > newx) { 
            this.data[j].shift(); 
          }
        }
        else if ((anchor === 1) || (anchor === 4) || (anchor === 7)) {
          if ((newx > oldx) && (i%2 === 1)) { 
            this.data[j].push(tile); 
          }
          else if ((newx > oldx) && (i%2 === 0)) { 
            this.data[j].unshift(tile); 
          }
          else if ((oldx > newx) && (i%2 === 1)) { 
            this.data[j].pop(); 
          }
          else if ((oldx > newx) && (i%2 === 0)) { 
            this.data[j].shift(); 
          }
        }
      }
    }
  }
  if ((newy) && (newy != oldy)) { 
    for (var i = 1; i <= Math.abs(newy-oldy); i++) {
      if (newy > oldy) {
        var placeholder = [];
        for (var j=0; j<this.data[0].length;j++) { placeholder.push(tile); }
        if ((anchor === 0) || (anchor === 1) || (anchor === 2)) {
          this.data.push(placeholder);
        }
        else if ((anchor === 6) || (anchor === 7) || (anchor === 8)) {
          this.data.unshift(placeholder);
        }
        else if ((anchor === 3) || (anchor === 4) || (anchor === 5)) {
          if (i%2 === 0) { 
            this.data.push(placeholder); 
          }
          else if (i%2 === 1) { 
            this.data.unshift(placeholder); 
          }
        }
      }
      else if (oldy > newy) {
        if ((anchor === 0) || (anchor === 1) || (anchor === 2)) {
          this.data.pop();
        }
        else if ((anchor === 6) || (anchor === 7) || (anchor === 8)) {
          this.data.shift(); 
        }
        else if ((anchor === 3) || (anchor === 4) || (anchor === 5)) {
          if (i%2 === 0) { 
            this.data.pop(); 
          }
          else if (i%2 === 1) { 
            this.data.shift(); 
          }
        }
      }
    }
  }
//  if (debug && debugflags.map) {
//    dbs.writeln("Done: " + this.data.length + " " + this.data[0].length + "<br><br>");
//  }
  DebugWrite("map", "Done: " + this.data.length + " " + this.data[0].length + "<br><br>");
  this.setFeaturesCoord();
  this.setNPCsCoord();
  drawMap();
}

GameMap.prototype.setFeaturesCoord = function() {
  for (var i = 0; i<=this.data.length-1; i++) {
  	for (var j = 0; j<=this.data[0].length-1; j++){
  		var featuresarray = this.data[i][j].features.getAll();
  		for (var ind = 0; ind<=featuresarray.length-1; ind++) {
  			featuresarray[ind].x = j;
  			featuresarray[ind].y = i;
  		}
  	}
  }
}

GameMap.prototype.setNPCsCoord = function() {
  for (var i = 0; i<=this.data.length-1; i++) {
  	for (var j = 0; j<=this.data[0].length-1; j++){
  		var npcsarray = this.data[i][j].npcs.getAll();
  		for (var ind = 0; ind<=npcsarray.length-1; ind++) {
  			npcsarray[ind].x = j;
  			npcsarray[ind].y = i;
  		}
  	}
  }
}


GameMap.prototype.placeThing = function(x,y,newthing,timeoverride,noactivate) {
  if (newthing) {
    newthing.setHomeMap(this);
    
    if (newthing.checkType("NPC") && (typeof this.Enter === "function")) {
      this.Enter(newthing,"",0,0,x,y);
    }

    var type = newthing.getTypeForMap() + "s";
    if (!this.data[type]) { this.data[type] = new Collection(); }
  	newthing.setx(x);
  	newthing.sety(y);
    this[type].addTop(newthing);

    if (!this.data[y][x][type]) {
      this.data[y][x][type] = new Collection();
    }
    this.data[y][x][type].addTop(newthing);

 	  if ((typeof newthing.getLight === "function") && (newthing.getLight() !== 0)) {
  	  DebugWrite("light", "<br /><br />LIGHT: Placing new light source: " + newthing.getName() + ", light value: " + newthing.getLight() + ", serial: " + newthing.getSerial());
  	  this.setMapLight(newthing, newthing.getLight(),x,y);
  	}       
  	
  	if (newthing.ambientNoise) {
  	  DebugWrite("sound", "<br /><br />Placing new ambient sound source: " + newthing.getName() + ", sound played: " + newthing.getAmbientNoise() + ", radius: " + newthing.getAmbientRadius() + " serial: " + newthing.getSerial() + "<br />");
  	  this.setNoiseSource(newthing, newthing.getAmbientNoise(), newthing.getAmbientRadius());
  	}
  
    if (!noactivate) {
      newthing.activate(timeoverride);
    }

	  //update pathfinding
	  if ((type !== "npcs") && (type !== "pcs")) {
      var tile = this.getTile(x,y);
      for (var itr=1; itr<=32; itr=itr*2) {
        var response = tile.canMoveHere(itr, 1);
	      if (response["canmove"]) { this.setWalkableAt(x,y,true,itr); }
  	    else { this.setWalkableAt(x,y,false,itr); }
    	}
    }

  }  
}

GameMap.prototype.moveThing = function(x,y,thing) { // this is called after bump and passable and before walkon
//	var type = thing.type + "s";
  var oldx = thing.getx();
  var oldy = thing.gety();
 	if ((typeof thing.getLight === "function") && (thing.getLight() !== 0)) {
    this.removeMapLight(thing.getSerial(),thing.getLight(),thing.getx(),thing.gety());
  }
  if (this.ambientNoise) {
    this.removeNoiseSource(thing,thing.getAmbientRadius());
  }
  var type = thing.getTypeForMap() + "s";
	this.data[thing.gety()][thing.getx()][type].deleteFrom(thing);
	if (!this.data[y][x][type]) { this.data[y][x][type] = new Collection(); }
  this.data[y][x][type].addTop(thing);
  thing.setx(x);
  thing.sety(y);
 	if ((typeof thing.getLight === "function") && (thing.getLight() !== 0)) {
    this.setMapLight(thing,thing.getLight(),x,y);
  }
  if (thing.ambientNoise) {
    this.setNoiseSource(thing, thing.getAmbientNoise(), thing.getAmbientRadius());
  }
  // update pathfinding
  if (type !== "npcs") {
    var oldtile = this.getTile(oldx,oldy);
    var tile = this.getTile(x,y);
  	for (var i=1; i<=32; i=i*2) {
	    var response = oldtile.canMoveHere(i, 1);
      if (response["canmove"]) { this.setWalkableAt(oldx,oldy,true,i); }
      else { this.setWalkableAt(oldx,oldy,false,i); }
      response = tile.canMoveHere(i, 1);
      if (response["canmove"]) { this.setWalkableAt(x,y,true,i); }
      else { this.setWalkableAt(x,y,false,i); }
    }
  }

}

GameMap.prototype.deleteThing = function(thing) {
  var thingmap = thing.getHomeMap();
//  alert(thingmap.getName());
//  alert(thing.getName());
  if (thingmap !== this) { alert("tried to delete " + thing.getName() + " which is not on this map."); return 0; }
  if (thing === targetCursor.lastTarget) { delete targetCursor.lastTarget; }
//	var type = thing.type + "s";
  var oldx = thing.getx()
  var oldy = thing.gety();
  var type = thing.getTypeForMap() + "s";
  if ((typeof thing.getLight === "function") && (Math.abs(thing.getLight()) > 0)) {
    this.removeMapLight(thing.getSerial(),thing.getLight(),thing.getx(),thing.gety());
  }
  if (thing.ambientNoise) {
    this.removeNoiseSource(thing, thing.getAmbientRadius());
  }
	this[type].deleteFrom(thing);
	this.data[thing.gety()][thing.getx()][type].deleteFrom(thing);
	
	//update pathfinding
	if ((type !== "npcs") && (type !== "pcs")) {
    var tile = this.getTile(oldx,oldy);
	  for (var i=1; i<=32; i=i*2) {
	    var response = tile.canMoveHere(i, 1);
  	  if (response["canmove"]) { this.setWalkableAt(oldx,oldy,true,i); }
	    else { this.setWalkableAt(oldx,oldy,false,i); }
	  }
	}
	
}


GameMap.prototype.saveMap = function (name) {
 if (name === '') {
   name = prompt("Map Name", this.name);
 }
 if (name === null) {return;}
 var printerwin = window.open('','printarray');
 printerwin.document.writeln('mappages["' + name + '"] = {};<br />');
 var oldname=name;
 name = 'mappages["' + name + '"].terrain';
 printerwin.document.writeln(name + " = [];<br />");
 var maxindex = this.data.length-1;
 for (var i=0;i<=maxindex;i++) {
 	 var saveind = i;
// 	 while (saveind.toString().length < maxindex.toString().length) {
// 	 	 saveind = "0" + saveind;
// 	 }
   var n = maxindex.toString().length - saveind.toString().length;
   if (n > 0) {
   	for (var m = 1; m<=n; m++) {
   		printerwin.document.write("&nbsp;");
   	}
   }
   printerwin.document.write(name + "[" + saveind + "] = '");
   for (var j=0;j<=this.data[0].length-1;j++) {
     var savethis = this.data[i][j].terrain.serialize();
     if (j != 0) {
       printerwin.document.write(" ");
     }
     printerwin.document.write(""+savethis);
   }
   printerwin.document.write("';<br />");
 }
 // ADD FEATURES/NPCs
 name = 'mappages["' + oldname + '"].features';
 printerwin.document.write("<br />" + name + " = [];<br />");
 var mapfeatures = this.features.getAll();
 for (var i=0;i<=mapfeatures.length-1;i++) {
   printerwin.document.write(name + "[" + i + "] = {name : '" + mapfeatures[i].getName() + "',");
   printerwin.document.write(" x : " + mapfeatures[i].getx() + ", y : " + mapfeatures[i].gety());
   // overrides
   var baseobj = localFactory.createTile(mapfeatures[i].getName());
 //  for (var props in baseobj) {
 //  	 if (baseobj[props] != this.features.container[i][props]) {
 //  	 	 printerwin.document.write(", " + props + " : " + this.features.container[i][props]);
 //  	 }
 //  }
   if (baseobj.getDesc() !== mapfeatures[i].getDesc()) {
   	 var thedesc = mapfeatures[i].getDesc();
     var replacequote = new RegExp('"', "g");
     thedesc = thedesc.replace(replacequote,'\\"');
     printerwin.document.write(", desc : \"" + thedesc + "\"");
   }
   if (baseobj.getPrefix() !== mapfeatures[i].getPrefix()) {
   	 var theprefix = mapfeatures[i].getPrefix();
     printerwin.document.write(", prefix : \"" + theprefix + "\"");
   }
   if ((baseobj.getLocked != null) && (baseobj.getLocked() !== mapfeatures[i].getLocked())) {
   	 printerwin.document.write(", locked : " + mapfeatures[i].getLocked());
   }
   if (mapfeatures[i].keyname) {
     printerwin.document.write(", keyname : \"" + mapfeatures[i].keyname + "\"");
   }
   if (baseobj.getEnterMap != null) {
   	 var mapdest = mapfeatures[i].getEnterMap();
   	 printerwin.document.write(", entermap : '" + mapdest.entermap + "', enterx : " + mapdest.enterx + ", entery : " + mapdest.entery);
   }
   if (baseobj.isContainer) {
     if (mapfeatures[i].getLootgroup()) {
       printerwin.document.write(", lootgroup : '" + mapfeatures[i].getLootgroup() + "'");
     }
     if (mapfeatures[i].getKarmaPenalty()) {
       printerwin.document.write(", karmaPenalty : '" + mapfeatures[i].getKarmaPenalty() + "'");
     }
   }
   if (baseobj.getWalkOnScript() !== mapfeatures[i].getWalkOnScript()) {
   	printerwin.document.write(", walkonscript : '" + mapfeatures[i].getWalkOnScript() + "'");
   }
   if (baseobj.getUseScript() !== mapfeatures[i].getUseScript()) {
   	printerwin.document.write(", usescript : '" + mapfeatures[i].getUseScript() + "'");
   } 
   if (baseobj.getLootedID() !== mapfeatures[i].getLootedID()) {  
     printerwin.document.write(", lootedid : '" + mapfeatures[i].getLootedID() + "'");
   }
   if (mapfeatures[i].getSearchYield().length) {
    var printyield = "";
    var itsyield = mapfeatures[i].getSearchYield();
    if (itsyield.length) {
      printyield = itsyield[0];
      if (itsyield.length > 1) {
        for (var j=1;j<itsyield.length;j++) {
          printyield += "," + itsyield[j];
        }
      }
    }
   	printerwin.document.write(", searchyield : '" + printyield + "'");
   }   
   printerwin.document.write("};<br />\n");
 }
 
 name = 'mappages["' + oldname + '"].npcs';
 printerwin.document.write("<br />\n");
 printerwin.document.write("<br />\n" + name + " = [];<br />\n");
 var mapnpcs = this.npcs.getAll();
 for (var i=0;i<=mapnpcs.length-1;i++) {
 	printerwin.document.write(name + "[" + i + "] = {name : '" + mapnpcs[i].getName() + "'");
 	printerwin.document.write(", x : " + mapnpcs[i].getx() + ", y : " + mapnpcs[i].gety());
 	var basenpc = localFactory.createTile(mapnpcs[i].getName());
 	if (basenpc.getNPCName() !== mapnpcs[i].getNPCName()) {
 		printerwin.document.write(", NPCName: '" + mapnpcs[i].getNPCName() + "'");
 	}
 	if (basenpc.getDesc() !== mapnpcs[i].getDesc()) {
 		printerwin.document.write(", Desc: '" + mapnpcs[i].getDesc() + "'");
 	}
 	if (basenpc.getPrefix() !== mapnpcs[i].getPrefix()) {
 		printerwin.document.write(", Prefix: '" + mapnpcs[i].getPrefix() + "'");
 	}
 	if (basenpc.getLevel() !== mapnpcs[i].getLevel()) {
 		printerwin.document.write(", Level: " + mapnpcs[i].getLevel());
 	}
 	if (basenpc.getAlignment() !== mapnpcs[i].getAlignment()) {
 		printerwin.document.write(", Alignment: '" + mapnpcs[i].getAlignment() + "'");
 	}
 	if (basenpc.getStr() !== mapnpcs[i].getStr()) {
 		printerwin.document.write(", str: " + mapnpcs[i].getStr());
 	}
 	if (basenpc.getDex() !== mapnpcs[i].getDex()) {
 		printerwin.document.write(", dex: " + mapnpcs[i].getDex());
 	}
 	if (basenpc.getInt() !== mapnpcs[i].getInt()) {
 		printerwin.document.write(", int: " + mapnpcs[i].getInt());
 	}
 	if (basenpc.getAttitude() !== mapnpcs[i].getAttitude()) {
 		printerwin.document.write(", Attitude: '" + mapnpcs[i].getAttitude() + "'");
 	}
 	if (basenpc.getPeaceAI() !== mapnpcs[i].getPeaceAI()) {
 		printerwin.document.write(", PeaceAI: '" + mapnpcs[i].getPeaceAI() + "'");
 	}
  if (basenpc.getPCThreatAI() !== mapnpcs[i].getPCThreatAI()) {
 		printerwin.document.write(", PCThreatAI: '" + mapnpcs[i].getPCThreatAI() + "'");
  }
  if (basenpc.getSchedule() !== mapnpcs[i].getSchedule()) {
 		printerwin.document.write(", Schedule: '" + mapnpcs[i].getSchedule() + "'");
 	} 	
 	if (basenpc.getConversation() !== mapnpcs[i].getConversation()) {
 		printerwin.document.write(", Conversation: '" + mapnpcs[i].getConversation() + "'");
 	} 	
 	if (basenpc.getConversationFlag() !== mapnpcs[i].getConversationFlag()) {
 		printerwin.document.write(", ConversationFlag: '" + mapnpcs[i].getConversationFlag() + "'");
 	} 	
 	if (basenpc.getGender() !== mapnpcs[i].getGender()) {
 		printerwin.document.write(", Gender: '" + mapnpcs[i].getGender() + "'");
 	} 	
 	if (basenpc.getMerch() !== mapnpcs[i].getMerch()) {
 		printerwin.document.write(", Merch: '" + mapnpcs[i].getMerch() + "'");
 	} 	
 	if (basenpc.getLeash() !== mapnpcs[i].getLeash()) {
 		printerwin.document.write(", Leash: " + mapnpcs[i].getLeash() + "");
 	} 	
 	if (basenpc.getBarkFreq() !== mapnpcs[i].getBarkFreq()) {
 		printerwin.document.write(", BarkFreq: " + mapnpcs[i].getBarkFreq() + "");
 	} 	
 	if (basenpc.getBark() !== mapnpcs[i].getBark()) {
 		printerwin.document.write(", Bark: '" + mapnpcs[i].getBark() + "'");
 	} 	
 	if (basenpc.getBarkRad() !== mapnpcs[i].getBarkRad()) {
 		printerwin.document.write(", BarkRad: " + mapnpcs[i].getBarkRad() + "");
 	} 	
 	if (basenpc.getNPCBand() !== mapnpcs[i].getNPCBand()) {
 		printerwin.document.write(", NPCBand: '" + mapnpcs[i].getNPCBand() + "'");
 	} 	
 	if (mapnpcs[i].overrideGraphic) {
 	  printerwin.document.write(", OverrideGraphic: '" + mapnpcs[i].overrideGraphic + "'");
 	}
 	printerwin.document.write("};<br />\n");
}
 
 name = 'mappages["' + oldname + '"]';
 printerwin.document.write("<br />\n" + name + ".desc = \"" + this.getDesc() + "\";<br />\n");
 printerwin.document.write(name + ".music = '" + this.getMusic() + "';<br />\n");
 printerwin.document.write(name + ".savename = '" + this.getSaveName() + "';<br />\n");
 printerwin.document.write(name + ".exitmap = '" + this.getExitToMap() + "';<br />\n");
 printerwin.document.write(name + ".exitx = '" + this.getExitToX() + "';<br />\n");
 printerwin.document.write(name + ".exity = '" + this.getExitToY() + "';<br />\n");
 printerwin.document.write(name + ".wraps = '" + this.getWrap() + "';<br />\n");
 printerwin.document.write(name + ".enterx = '" + this.getEnterX() + "';<br />\n");
 printerwin.document.write(name + ".entery = '" + this.getEnterY() + "';<br />\n");
 printerwin.document.write(name + ".seeBelow = '" + this.getSeeBelow() + "';<br />\n");
 printerwin.document.write(name + ".lightLevel = '" + this.getLightLevel() + "';<br />\n");
 printerwin.document.write(name + ".alwaysRemember = '" + this.getAlwaysRemember() + "';<br />\n");
 printerwin.document.write(name + ".scale = '" + this.getScale() + "';<br />\n");
 printerwin.document.write(name + ".underground = '" + this.getUnderground() + "';<br />\n");
 printerwin.document.write(name + ".undergroundDesc = '" + this.getUndergroundDesc() + "';<br />\n");
 printerwin.document.write(name + ".enterscript = '" + this.getEnterScript() + "';<br />\n");
 printerwin.document.write(name + ".entertestscript = '" + this.getEnterTestScript() + "';<br />\n");
 printerwin.document.write(name + ".exitscript = '" + this.getExitScript() + "';<br />\n");
 printerwin.document.write(name + ".exittestscript = '" + this.getExitTestScript() + "';<br />\n");
 printerwin.document.write(name + ".returnmap = '" + this.getReturnMap() + "';<br />\n");
 printerwin.document.write(name + ".returnx = '" + this.getReturnx() + "';<br />\n");
 printerwin.document.write(name + ".returny = '" + this.getReturny() + "';<br />\n");
 printerwin.document.write(name + ".returninfused = '" + this.getReturnInfused() + "';<br />\n");
 var linkedMapList;
 var linkedMapArray = this.getLinkedMaps();
 if (linkedMapArray.length > 0) {
 	 for (var i=0;i<linkedMapArray.length;i++) {
 	 	if (i === 0) {
 	 		linkedMapList = '"' + linkedMapArray[i] + '"';
 	 	} else {
 	 		linkedMapList = linkedMapList + ',"' + linkedMapArray[i] + '"';
 	 	}
 	}
 	printerwin.document.write(name + ".linkedMaps = [" + linkedMapList + "];<br />\n");
 }
 else {
   printerwin.document.write(name + ".linkedMaps = [];<br />\n");
 }
 printerwin.document.write(name + ".editorLabels = '" + JSON.stringify(this.allLabels).replace("'","\\'") + "';<br /><br />\n");
 printerwin.document.close();
}

GameMap.prototype.loadMap = function (name) {
  this.data = [];
  this.features.deleteAll();
  this.npcs.deleteAll();
  var loadfrom = mappages.readPage(name, "terrain");
  var localatlas = new Atlas();
  for (var i=0;i<=loadfrom.length-1;i++) {
    DebugWrite("map", "<br>Starting line: " +i+ ", length " + loadfrom[i].length + " <br>");
    var tileserials = [];
    tileserials = loadfrom[i].split(" ");
    this.data[i] = [];
    for (var j=0;j<=tileserials.length-1;j++) {
      DebugWrite("map", " " + tileserials[j]);
      var loadedtile = localatlas.key[tileserials[j]];

      var newterrain = eidos.getForm(loadedtile);
      this.setTerrain(j,i,newterrain);
    }
  }
  
  // load map details
  this.setDesc(mappages.readPage(name, "desc"));
  this.setMusic(mappages.readPage(name, "music"));
  this.setSaveName(mappages.readPage(name, "savename"));
  this.setExitToMap(mappages.readPage(name, "exitmap"));
  this.setExitToX(mappages.readPage(name, "exitx"));
  this.setExitToY(mappages.readPage(name, "exity"));
  this.setWrap(mappages.readPage(name, "wraps"));
  this.setEnterX(mappages.readPage(name, "enterx"));
  this.setEnterY(mappages.readPage(name, "entery"));
  this.setSeeBelow(mappages.readPage(name, "seeBelow"));
  this.setLinkedMapsArray(mappages.readPage(name, "linkedMaps"));
  this.setLightLevel(mappages.readPage(name, "lightLevel"));
  this.setAlwaysRemember(mappages.readPage(name, "alwaysRemember"));
  this.setScale(mappages.readPage(name, "scale"));
  this.setUnderground(mappages.readPage(name, "underground"));
  this.setUndergroundDesc(mappages.readPage(name, "undergroundDesc"));
  this.setSaveName(mappages.readPage(name, "savename"));
  this.setReturn(mappages.readPage(name, "returnmap"), mappages.readPage(name, "returnx"), mappages.readPage(name, "returny"));
  this.setReturnInfused(mappages.readPage(name, "returninfused"));
  if (DU.gameflags.getFlag("editor")) {
    if (mappages.readPage(name, "editorLabels")) {
      this.allLabels = JSON.parse(mappages.readPage(name, "editorLabels"));
    } else {
      this.allLabels = {};
    }
  }
  if (!DU.gameflags.getFlag("editor")) {
    if(mappages.readPage(name, "enterscript")) {
      mappages[name][mappages.readPage(name, "enterscript")](this);
    }
    if(mappages.readPage(name, "entertestscript")){
      mappages[name][mappages.readPage(name, "entertestscript")](this);
    }
    if(mappages.readPage(name, "exitscript")) {
      mappages[name][mappages.readPage(name, "exitscript")](this);
    }
    if(mappages.readPage(name, "exittestscript")) {
      mappages[name][mappages.readPage(name, "exittestscript")](this);
    }
  } else {
    if(mappages.readPage(name, "enterscript")) {
      this.setEnterScript(mappages.readPage(name, "enterscript"));
    }
    if(mappages.readPage(name, "entertestscript")){
      this.setEnterTestScript(mappages.readPage(name, "entertestscript"));
    }
    if(mappages.readPage(name, "exitscript")) {
      this.setExitScript(mappages.readPage(name, "exitscript"));
    }
    if(mappages.readPage(name, "exittestscript")) {
      this.setExitTestScript(mappages.readPage(name, "exittestscript"));
    }
  }
  
  this.setName(name);
  this.createPathGrid();

  var litfeatures = [];

  if (gamestate.getMode() !== "loadgame") {
    var loadfeatures = mappages.readPage(name, "features");
//  this.features = new Collection;
    if (loadfeatures) {
//  	alert(loadfeatures.length + " features loading...");
      for (var fi=0;fi<=loadfeatures.length-1;fi++) {
        var newfeature = localFactory.createTile(loadfeatures[fi].name);
        DebugWrite("map", "<br />Loading features: " +newfeature.getName()+ "...<br />");
//    	newfeature.setHomeMap(this);
    	  for (var featurekey in loadfeatures[fi]) {
    		  if (featurekey === "name") { continue; }
      		if (featurekey === "locked") { newfeature.lockMe(loadfeatures[fi]["locked"]); continue; }
      		if (featurekey === "searchyield") { 
      		  var tmpyield = loadfeatures[fi][featurekey].split(",");
      		  newfeature["searchYield"] = tmpyield;
      		  continue;
      		}
      		newfeature[featurekey] = loadfeatures[fi][featurekey];
      	}
//    	  if (newfeature.getWalkOnScript()) {
//          alert("Does this ever happen?");
//      		var walkonscript = newfeature.getWalkOnScript();
//      		mappages[name][walkonscript](newfeature);
//      	}
//      	if (newfeature.getUseScript()) {
//      		var usescript = newfeature.getUseScript();
//      		mappages[name][usescript](newfeature);
//   	  }
// Pretty sure these are long since deprecated
      	if (newfeature.getLootedID()) {
      	  if (DU.gameflags.getFlag("lid_" + newfeature.getLootedID())) {
      	    if (newfeature.lootonce) { newfeature.setLootgroup(""); }
      	    else  { newfeature.setLootgroup("prev_looted"); }
      	  }
      	}
      	if (newfeature.getLootgroup()) {
      	  AddLoot(newfeature);
      	}
        if (typeof newfeature.getLight === "function") {
          var tmpobj = {};
          tmpobj.feature = newfeature;
          tmpobj.x = loadfeatures[fi].x;
          tmpobj.y = loadfeatures[fi].y;
          litfeatures.push(tmpobj);
        } else {
    	    this.placeThing(loadfeatures[fi].x,loadfeatures[fi].y,newfeature);
        }
      }
    }

    for (var i=0; i<litfeatures.length;i++) {
      this.placeThing(litfeatures[i].x,litfeatures[i].y,litfeatures[i].feature);
    }

    var loadnpcs = mappages.readPage(name, "npcs");
    if (loadnpcs)  {
  	  for (var npci=0;npci<=loadnpcs.length-1;npci++) {
    		var newnpc = localFactory.createTile(loadnpcs[npci].name);
//  		newnpc.setHomeMap(this);
    		for (var npckey in loadnpcs[npci]) {
  	  		if (npckey === "NPCName") { newnpc.setNPCName(loadnpcs[npci].NPCName); }
  		  	if (npckey === "Desc") { newnpc.setDesc(loadnpcs[npci].Desc); }
  			  if (npckey === "Prefix") { newnpc.setPrefix(loadnpcs[npci].Prefix); }
    			if (npckey === "Level") { newnpc.setLevel(loadnpcs[npci].Level); }
    			if (npckey === "Alignment") { newnpc.setAlignment(loadnpcs[npci].Alignment); }
  	  		if (npckey === "str") { newnpc.setStr(loadnpcs[npci].str); }
  		  	if (npckey === "dex") { newnpc.setDex(loadnpcs[npci].dex); }
  			  if (npckey === "int") { newnpc.setInt(loadnpcs[npci].int); }
    			if (npckey === "Attitude") { newnpc.setAttitude(loadnpcs[npci].Attitude); }
    			if (npckey === "PeaceAI") { newnpc.setPeaceAI(loadnpcs[npci].PeaceAI); }
  	  		if (npckey === "PCThreatAI") { newnpc.setPCThreatAI(loadnpcs[npci].PCThreatAI); }
  			  if (npckey === "Melee") { newnpc.setMeleeAttackAs(loadnpcs[npci].Melee); }
          if (npckey === "Missile") { newnpc.setMissileAttackAs(loadnpcs[npci].Missile); }
    			if (npckey === "Schedule") { newnpc.setSchedule(loadnpcs[npci].Schedule); }
    			if (npckey === "Conversation") { newnpc.setConversation(loadnpcs[npci].Conversation); }
  	  		if (npckey === "ConversationFlag") { newnpc.setConversationFlag(loadnpcs[npci].ConversationFlag); }
  		  	if (npckey === "Gender") { newnpc.setGender(loadnpcs[npci].Gender); }
  			  if (npckey === "Merch") { newnpc.setMerch(loadnpcs[npci].Merch); }
  			  if (npckey === "Leash") { newnpc.setLeash(loadnpcs[npci].Leash); }
  			  if (npckey === "BarkFreq") { newnpc.setBarkFreq(loadnpcs[npci].BarkFreq); }
  			  if (npckey === "Bark") { newnpc.setBark(loadnpcs[npci].Bark); }
  			  if (npckey === "BarkRad") { newnpc.setBarkRad(loadnpcs[npci].BarkRad); }
  			  if (npckey === "NPCBand") { newnpc.setNPCBand(loadnpcs[npci].NPCBand); }
  			  if (npckey === "OverrideGraphic") { newnpc.overrideGraphic = loadnpcs[npci].OverrideGraphic; }
        }
        if ((newnpc.getPeaceAI() === "scheduled") && (!DU.gameflags.getFlag("editor"))) {
          var loc = DU.schedules[newnpc.getSchedule()].getNPCLocationByTime(GetClockTime(), 1, 1);
          newnpc._mapName = loc.mapName;
          this.placeThing(loc.x,loc.y,newnpc);
          newnpc.flags = loc.flags;
          if (this.getName() === newnpc._mapName) {
            // it has been placed on the correct map
            let placedacre = this.getTile(loc.x,loc.y);
            placedacre.executeWalkons(newnpc);  
            delete newnpc._mapName;
          } else {
            DebugWrite("schedules", "Put " + newnpc.getNPCName() + " on wrong map for now.<br />");
          }
        } else {
          this.placeThing(loadnpcs[npci].x,loadnpcs[npci].y,newnpc);
        }
  	  }
    }
  }
  
  return;
}

GameMap.prototype.setNoiseSource = function(noisesource, noise, radius) {
  this.soundList[noisesource.getSerial()] = noisesource;
  for (var i=noisesource.getx()-Math.ceil(radius);i<=noisesource.getx()+Math.ceil(radius);i++) {
    for (var j=noisesource.gety()-Math.ceil(radius);j<=noisesource.gety()+Math.ceil(radius);j++) {
      var tile = this.getTile(i,j);
      if (tile !== "OoB") {
        if (GetDistance(noisesource.getx(),noisesource.gety(),i,j) <= radius) {
          tile.addLocalSound(noise,noisesource,this);
        }
      }
    }
  }
}

GameMap.prototype.removeNoiseSource = function(noisesource, radius) {
  var serial = noisesource.getSerial();
  for (var i=noisesource.getx()-radius;i<=noisesource.getx()+radius;i++) {
    for (var j=noisesource.gety()-radius;j<=noisesource.gety()+radius;j++) {
      var tile = this.getTile(i,j);
      if (tile !== "OoB") {
        if (GetDistance(noisesource.getx(),noisesource.gety(),i,j) <= radius) {
          tile.removeLocalSound(noisesource);
        }
      }
    }
  }  
}

GameMap.prototype.setMapLight = function(lightsource,light,x,y) {
  if (this.getLightLevel() === "bright") { return; }
  var serial = lightsource.getSerial();

  DebugWrite("light", "LIGHT: " + lightsource.getHomeMap().getName() + ", " + serial + ", " + light + ", " + x + ", " + y + "<br />");
	for (var i = (x-(Math.ceil(Math.abs(light))+1)); i<=(x+(Math.ceil(Math.abs(light))+1)); i++) {
		for (var j = (y-(Math.ceil(Math.abs(light))+1)); j<=(y+(Math.ceil(Math.abs(light))+1)); j++) {
			if (this.getTile(i,j) === "OoB") { continue; }
			var block = this.getTile(i,j).getBlocksLOS();
      DebugWrite("light", "<br />LIGHT " + serial + " (" + x + "," + y + "): Checking shine on x:"+i+",y:"+j+", which blocks " + block + ".<br />");
			if ((block > LOS_THRESHOLD) && (!lightsource.checkType("PC"))) {   
        var LOSval = this.getLOS(x,y,i,j,0,1,1);
        if (LOSval.ne > LOS_THRESHOLD) { LOSval.ne = LOS_THRESHOLD; }
        if (LOSval.nw > LOS_THRESHOLD) { LOSval.nw = LOS_THRESHOLD; }
        if (LOSval.se > LOS_THRESHOLD) { LOSval.se = LOS_THRESHOLD; }
        if (LOSval.sw > LOS_THRESHOLD) { LOSval.sw = LOS_THRESHOLD; }
        if (LOSval.center > LOS_THRESHOLD) { LOSval.center = LOS_THRESHOLD; }
        var dist = Math.pow((Math.pow((x-i),2) + Math.pow((y-j),2)),(.5));
        var totlight = {};
        DebugWrite("light", "LOSVAL ne: " + LOSval.ne + ", nw: " + LOSval.nw + ", se: " + LOSval.se + ", sw: " + LOSval.sw + ".<br />");
        totlight.ne = (light + 1.5 - dist) * ( 1- (LOSval.ne / LOS_THRESHOLD) );
        if ((light >= 0) && (totlight.ne < 0)) { totlight.ne = 0; }
        totlight.nw = (light + 1.5 - dist) * ( 1- (LOSval.nw / LOS_THRESHOLD) );
        if ((light >= 0) && (totlight.nw < 0)) { totlight.nw = 0; }
        totlight.se = (light + 1.5 - dist) * ( 1- (LOSval.se / LOS_THRESHOLD));
        if ((light >= 0) && (totlight.se < 0)) { totlight.se = 0; }
        totlight.sw = (light + 1.5 - dist) * ( 1- (LOSval.sw / LOS_THRESHOLD) );
        if ((light >= 0) && (totlight.sw < 0)) { totlight.sw = 0; }
        totlight.center = (light + 1.5 - dist) * ( 1- (LOSval.center / LOS_THRESHOLD) );
        if ((light >= 0) && (totlight.center < 0)) { totlight.center = 0; }
        if ((totlight.ne > 0) || (totlight.nw > 0) || (totlight.se > 0) || (totlight.sw > 0)) {
          this.getTile(i,j).addLocalLight(lightsource,totlight,this);
        }
			} else {
        var LOSval = this.getLOS(x,y,i,j,0,0,1);
        DebugWrite("light", "LIGHT " + serial + ": LOSval: " + JSON.stringify(LOSval) + ".<br />");
        if (typeof LOSval === "number") { if (LOSval > LOS_THRESHOLD) { LOSval = LOS_THRESHOLD; } };
        if (LOSval.ne > LOS_THRESHOLD) { LOSval.ne = LOS_THRESHOLD; }
        if (LOSval.nw > LOS_THRESHOLD) { LOSval.nw = LOS_THRESHOLD; }
        if (LOSval.se > LOS_THRESHOLD) { LOSval.se = LOS_THRESHOLD; }
        if (LOSval.sw > LOS_THRESHOLD) { LOSval.sw = LOS_THRESHOLD; }
        if (LOSval.center > LOS_THRESHOLD) { LOSval.center = LOS_THRESHOLD; }
        var dist = Math.pow((Math.pow((x-i),2) + Math.pow((y-j),2)),(.5));
        var totlight = {};
        totlight.center = (light + 1.5 - dist) * ( 1- (LOSval / LOS_THRESHOLD) );
        if ((light >= 0) && (totlight.center < 0)) { totlight.center = 0; }
        if ((lightsource.checkType("PC")) && (block > LOS_THRESHOLD)) {
          totlight.ne = totlight.center;
          totlight.se = totlight.center;
          totlight.sw = totlight.center;
          totlight.nw = totlight.center;
        }
        if (totlight.center > 0) { 
          this.getTile(i,j).addLocalLight(lightsource,totlight,this);
        }
			}
			if (block > LOS_THRESHOLD) {
//			  if (debug && debugflags.light) {dbs.writeln("LIGHT " + serial + ": LOSval was (center:" + LOSval.center + ", nw:" + LOSval.nw + ", ne:" + LOSval.ne + ", sw:" + LOSval.sw + ", se:" + LOSval.se + "), light values: center=" + totlight.center + ", ne=" + totlight.ne + ", nw=" + totlight.nw + ", se=" + totlight.se + ", sw=" +totlight.sw + ".<br />"); }
			  DebugWrite("light", "LIGHT " + serial + ": LOSval was (center:" + LOSval.center + ", nw:" + LOSval.nw + ", ne:" + LOSval.ne + ", sw:" + LOSval.sw + ", se:" + LOSval.se + "), light values: center=" + totlight.center + ", ne=" + totlight.ne + ", nw=" + totlight.nw + ", se=" + totlight.se + ", sw=" +totlight.sw + ".<br />");
			} else {
//			  if (debug && debugflags.light) {dbs.writeln("LIGHT " + serial + ": LOSval was " + LOSval + ", light values: center=" + totlight.center + ", ne=" + totlight.ne + ", nw=" + totlight.nw + ", se=" + totlight.se + ", sw=" +totlight.sw + ".<br />"); }
			  DebugWrite("light", "LIGHT " + serial + ": LOSval was " + LOSval + ", light values: center=" + totlight.center + ", ne=" + totlight.ne + ", nw=" + totlight.nw + ", se=" + totlight.se + ", sw=" +totlight.sw + ".<br />");
			}
		}
	}
}

GameMap.prototype.removeMapLight = function(serial,light,x,y) {
	for (var i = (x-(Math.ceil(Math.abs(light))+1)); i<=(x+(Math.ceil(Math.abs(light))+1)); i++) {
		for (var j = (y-(Math.ceil(Math.abs(light))+1)); j<=(y+(Math.ceil(Math.abs(light))+1)); j++) {
			if (this.getTile(i,j) !== "OoB") { 
			  this.getTile(i,j).removeLocalLight(serial);
			}
		}
	}
}

//GameMap.prototype.getLOE = function(x1,y1,x2,y2,losgrid) {
//  return genLOS(x1,y1,x2,y2,losgrid,"center","center",this, 1, 0);
//}

GameMap.prototype.getLOS = function(x1,y1,x2,y2, useloe, checklight, checkforlight) {
//  if (debug) { dbs.writeln("<span style='color:grey;font-style:italic'>&nbsp;Getting LOS between " + x1 + ", " + y1 + " and " + x2 +", " + y2 + ".<br /></span>");  }
  // checklight = 0, check is for LOS only or light on an object that does not block LOS or the light source is the PC
  // checklight = 1, check is for light on an object that does block LOS
  
  // checkforlight is a universal "is this check on the behalf of light", since the previous variable is insufficient for
  // that and adding this was easier than refactoring
  
	var trueLOS = 100;
	var totalLOS = 0;
	var quartersLOS = {};

 	quartersLOS.nw = 100;
  quartersLOS.ne = 100;
  quartersLOS.sw = 100;
  quartersLOS.se = 100;
  quartersLOS.center = 100;

  if (( (x2-x1) === 0) && ( (y2-y1) === 0)) {
//    if (debug && (debugflags.map || debugflags.light)) { dbs.writeln("<span style='color:grey;font-style:italic'>&nbsp;Own tile, returning 0.<br /></span>");  }
    DebugWrite("light", "&nbsp;Own tile, returning 0.<br />");
    if (checklight) {
      quartersLOS.nw = 0;
      quartersLOS.ne = 0;
      quartersLOS.se = 0;
      quartersLOS.sw = 0;
      quartersLOS.center = 0;
      return quartersLOS;
    }
    return 0;
  } else if (( (x2-x1) === 0) && ( (y2-y1) < 0)) {  // north line
    totalLOS = genLOS(x1,y1,x2,y2,"center","center",this, useloe, checklight);

		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else { return totalLOS; }		   
		}
  } else if (( (x2-x1) > 0) && ( (y2-y1) < 0)) { // NE quadrant
		totalLOS = genLOS(x1,y1,x2,y2,"ne","sw",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
		  totalLOS = genLOS(x1,y1,x2,y2,"ne","nw",this, useloe, checklight);
		} else {
		  // look at the sw of the tile above rather than the nw of the dest tile so the dest tile's 
		  // effect on los is calculated. The same is true everywhere else in this function that 
		  // I split the totalLOS check in two.
		  totalLOS = genLOS(x1,y1,x2,y2-1,"ne","sw",this, useloe, checklight);
		}
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"ne","se",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2+1,y2,"ne","sw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    
		
		totalLOS = genLOS(x1,y1,x2,y2,"nw","sw",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"nw","nw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2-1,"nw","sw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"nw","se",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2+1,y2,"nw","sw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

		totalLOS = genLOS(x1,y1,x2,y2,"se","sw",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"se","nw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2-1,"se","sw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"se","se",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2+1,y2,"se","sw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

  } else if (( (x2-x1) > 0) && ( (y2-y1) === 0)) {  // east line
    totalLOS = genLOS(x1,y1,x2,y2,"center","center",this, useloe, checklight);

		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else { return totalLOS; }		   
		}    
  } else if (( (x2-x1) > 0) && ( (y2-y1) > 0)) { // SE quadrant
    if (!checklight) {
		  totalLOS = genLOS(x1,y1,x2,y2,"se","sw",this, useloe, checklight);
		} else {
		  totalLOS = genLOS(x1,y1,x2,y2+1,"se","nw",this, useloe, checklight);
		}
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		totalLOS = genLOS(x1,y1,x2,y2,"se","nw",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"se","ne",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2+1,y2,"se","nw",this, useloe, checklight);
    }
		if  (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    
		
		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"sw","sw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2+1,"sw","nw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		totalLOS = genLOS(x1,y1,x2,y2,"sw","nw",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"sw","ne",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2+1,y2,"sw","nw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"ne","sw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2+1,"ne","nw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		totalLOS = genLOS(x1,y1,x2,y2,"ne","nw",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"ne","ne",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2+1,y2,"ne","nw",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

  } else if (( (x2-x1) === 0) && ( (y2-y1) > 0)) {  // south line
    totalLOS = genLOS(x1,y1,x2,y2,"center","center",this, useloe, checklight);

		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else { return totalLOS; }		   
		}    
  } else if (( (x2-x1) < 0) && ( (y2-y1) > 0)) { // SW quadrant
		totalLOS = genLOS(x1,y1,x2,y2,"sw","ne",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"sw","nw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2-1,y2,"sw","ne",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"sw","se",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2+1,"sw","ne",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    
		
		totalLOS = genLOS(x1,y1,x2,y2,"nw","ne",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"nw","nw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2-1,y2,"nw","ne",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"nw","se",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2+1,"nw","ne",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

		totalLOS = genLOS(x1,y1,x2,y2,"se","ne",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"se","nw",this, useloe, checklight);
    } else  {
      totalLOS = genLOS(x1,y1,x2-1,y2,"se","ne",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.nw) { quartersLOS.nw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"se","se",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2+1,"se","ne",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

  } else if (( (x2-x1) < 0) && ( (y2-y1) === 0)) {  // west line
    totalLOS = genLOS(x1,y1,x2,y2,"center","center",this, useloe, checklight);

		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else { return totalLOS; }		   
		}    
  } else if (( (x2-x1) < 0) && ( (y2-y1) < 0)) { // NW quadrant
    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"sw","ne",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2-1,"sw","se",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"sw","sw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2-1,y2,"sw","se",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		totalLOS = genLOS(x1,y1,x2,y2,"sw","se",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    
		
    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"nw","ne",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2-1,"nw","se",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"nw","sw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2-1,y2,"nw","se",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		totalLOS = genLOS(x1,y1,x2,y2,"nw","se",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"ne","ne",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2,y2-1,"ne","se",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.ne) { quartersLOS.ne = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

    if (!checklight) {
      totalLOS = genLOS(x1,y1,x2,y2,"ne","sw",this, useloe, checklight);
    } else {
      totalLOS = genLOS(x1,y1,x2-1,y2,"ne","se",this, useloe, checklight);
    }
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.sw) { quartersLOS.sw = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }

		totalLOS = genLOS(x1,y1,x2,y2,"ne","se",this, useloe, checklight);
		if (totalLOS < LOS_THRESHOLD) { 
		  if (checklight) {
		    if (totalLOS < quartersLOS.center) { quartersLOS.center = totalLOS; }
		    if (totalLOS < quartersLOS.se) { quartersLOS.se = totalLOS; }
		  }
		  else if ((!checkforlight) || (totalLOS < .005)) { return totalLOS; }
		}
		if (totalLOS < trueLOS) { trueLOS = totalLOS; }    

  }
  if (checklight) { return quartersLOS; }	
	
  return trueLOS;
}

function genLOS(x1,y1,x2,y2,startsection,endsection,losmap, useloe, allin) {
	  var LOSes = losgrid.getLOS(x1,y1,x2,y2,startsection,endsection);
	  var totalLOS = 0;
	  if (LOSes[0]) {
	  	for (var i = 0; i < LOSes.length; i++ ){
	  		var passx = parseInt(x1) + parseInt(LOSes[i].x);
	  		var passy = parseInt(y1) + parseInt(LOSes[i].y);
	  		var location = losmap.getTile(passx,passy);
	  		var dist = Math.sqrt(Math.pow((passx - x1), 2) + Math.pow((passy - y1),2));
	  		if (useloe) {
	  		  var block = location.getBlocksLOE(dist);
	  		  if (allin && (block >= 1) && ((LOSes[i].coeff * block) > .05) ) { return 1; }
	  		  totalLOS += LOSes[i].coeff * block;
	  		} else {
	  		  var block = location.getBlocksLOS(dist);
	  		  if (allin && (block >= 1) && ((LOSes[i].coeff * block) > .05) ) { return 1; }
	  		  totalLOS += LOSes[i].coeff * block;
	  		}
	  		if (totalLOS > LOS_THRESHOLD) { return totalLOS; }
	  	}
	  } 
	  return totalLOS;	
}

GameMap.prototype.setLights = function() {
	for (var i = 0; i < this.data.length; i++) {
		for (var j = 0; j < this.data[i].length; j++) {
			
		}
	}
}

function Pages() {

  this["test"] = {};
  this["test"].terrain = [];
  this["test"].terrain[0] = "WW WW WW WW WW";
  this["test"].terrain[1] = "WW ww ww ww WW";
  this["test"].terrain[2] = "WW ww uu ww WW";
  this["test"].terrain[3] = "WW ww ww ww WW";
  this["test"].terrain[4] = "WW WW WW WW WW";

}

Pages.prototype.readPage = function (name,type) {
  if (this[name][type]) {
    return this[name][type];
  } else {
  	return "";
  }
  
}


function Platonic() {

  this.data = {};

}

Platonic.prototype.getForm = function (name) {

  if (this.data[name]) {
    return this.data[name];
  }
  else {
//    if (debug && debugflags.map) {
//      dbs.writeln("((Adding " + name + " to the platonic forms.))<br />");
//    }
    DebugWrite("map", "((Adding " + name + " to the platonic forms.))<br />");

    this.data[name] = localFactory.createTile(name);
    return this.data[name];
  }

}

function MapMemory() {
  this.data = {};	
}

MapMemory.prototype.addMap = function(mapname) {
	var newmap = new GameMap();
	newmap.loadMap(mapname);
	
	this.addMapByRef(newmap);

  if(typeof mappages[mapname]["onload"] === "function") {
    mappages[mapname]["onload"](newmap);
  }
	
	return newmap;
}

MapMemory.prototype.addMapByRef = function(mapref) {
	var mapname = mapref.getName();
	this.data[mapname] = mapref;
	
	// also load linked maps
	if (gamestate.getMode() !== "loadgame") {  // but only if not loading- on load they are in the saved game
  	if (mapref.linkedMaps[0] && mapref.linkedMaps[0] !== "") {
	    for (var i = 0; i < mapref.linkedMaps.length; i++) {
	      var anothermap = new GameMap();
	      anothermap.loadMap(mapref.linkedMaps[i]);
  	    this.data[mapref.linkedMaps[i]] = anothermap;
	    }
	  }
	}
	
	return mapref;
}

MapMemory.prototype.deleteMap = function(mapname) {
  var negated = DU.gameflags.getFlag("negate");
	if (this.data[mapname].linkedMaps[0] && this.data[mapname].linkedMaps[0] !== "") {
		for (var i = 0; i < this.data[mapname].linkedMaps.length; i++) {
			delete this.data[this.data[mapname].linkedMaps[i]];
			// also stop tracking that magic is negated on this map
			delete negated[this.data[mapname].linkedMaps[i]];   
//			if (debug && debugflags.map) { dbs.writeln("<span style='color:brown; font-style:italic'>Deleting map " + this.data[mapname].linkedMaps[i] + ".</span><br />"); }	
			DebugWrite("map", "* Deleting map " + this.data[mapname].linkedMaps[i] + ".</span><br />");
		}
	}
	delete this.data[mapname];
	delete negated[mapname];
	DU.gameflags.setFlag("negate", negated);
	if (debug && debugflags.map) {
//	  dbs.writeln("<span style='color:brown; font-style:italic'>Remaining maps: "); 
	  DebugWrite("map", "Remaining maps: ");
	  $.each(this.data, function(idx,val) {
//	    dbs.writeln(idx + ", "); 
	    DebugWrite("map", idx + ", ");
	  });
//	  dbs.writeln(".</span><br />");
	  DebugWrite("map", ".</span><br />");
	}
	
}

MapMemory.prototype.getMap = function(mapname) {
	if (this.data[mapname]) { return this.data[mapname]; }
	else { return undefined; }
}
