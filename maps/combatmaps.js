mappages["combatGrass1"] = new Object();
mappages["combatGrass1"].terrain = new Array;
 mappages["combatGrass1"].terrain[0] = ',, ,, ,, .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass1"].terrain[1] = ',, #% .. .. .. .. .. .. .. .. .. .. ,,';
 mappages["combatGrass1"].terrain[2] = '.. .. .. .. .. .. .. .. .. .. .. ,, ,,';
 mappages["combatGrass1"].terrain[3] = '.. .. .. .. .. .. .. .. .. .. ,, ,, ,,';
 mappages["combatGrass1"].terrain[4] = '.. .. .. .. .. .. .. .. .. .. ,, ,, ,,';
 mappages["combatGrass1"].terrain[5] = ',, #% .. .. .. .. .. .. .. .. #% ,, ,,';
 mappages["combatGrass1"].terrain[6] = ',, ,, .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass1"].terrain[7] = ',, ,, ,, .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass1"].terrain[8] = ',, ,, .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass1"].terrain[9] = ',, ,, #% .. .. .. .. .. .. .. .. #% ..';
mappages["combatGrass1"].terrain[10] = '.. ,, .. .. .. .. .. .. .. .. .. ,, ,,';
mappages["combatGrass1"].terrain[11] = '.. .. .. .. .. .. .. .. .. .. .. ,, ,,';
mappages["combatGrass1"].terrain[12] = '.. .. .. .. .. .. .. .. .. .. .. .. ,,';

mappages["combatGrass1"].features = new Array;


mappages["combatGrass1"].npcs = new Array;

mappages["combatGrass1"].desc = 'Combat';
mappages["combatGrass1"].music = 'Combat';
mappages["combatGrass1"].exitmap = '';
mappages["combatGrass1"].exitx = '';
mappages["combatGrass1"].exity = '';
mappages["combatGrass1"].wraps = 'None';
mappages["combatGrass1"].enterx = '6';
mappages["combatGrass1"].entery = '9';
mappages["combatGrass1"].seeBelow = '';
mappages["combatGrass1"].lightLevel = 'bright';
mappages["combatGrass1"].alwaysRemember = '0';
mappages["combatGrass1"].scale = '1';
mappages["combatGrass1"].enterscript = 'set_exits';
mappages["combatGrass1"].entertestscript = '';
mappages["combatGrass1"].exitscript = '';
mappages["combatGrass1"].exittestscript = 'check_escape';
mappages["combatGrass1"].linkedMaps = new Array("");

// manually added

mappages["combatGrass1"].set_exits = function(mapref) {
  maps_set_exits(mapref);
}


mappages["combatGrass1"].check_escape = function(mapref) {
  maps_check_escape(mapref);
}

mappages["combatGrass2"] = new Object();
mappages["combatGrass2"].terrain = new Array;
 mappages["combatGrass2"].terrain[0] = '.. .. .. .. ,, ,, ,, ,, ,, .. .. .. ..';
 mappages["combatGrass2"].terrain[1] = '.. .. .. .. .. .. ,, ,, .. .. .. .. ..';
 mappages["combatGrass2"].terrain[2] = '.. .. .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[3] = '.. .. .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[4] = '.. .. .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[5] = '.. .. .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[6] = '.. .. .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[7] = '.. .. .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[8] = '.. ,, .. .. .. .. .. .. .. .. .. .. ..';
 mappages["combatGrass2"].terrain[9] = '.. ,, ,, .. .. .. .. .. .. .. .. .. ,,';
mappages["combatGrass2"].terrain[10] = ',, ,, ,, .. .. .. .. .. .. .. .. #% ,,';
mappages["combatGrass2"].terrain[11] = ',, .. .. .. .. .. .. .. .. .. ,, ,, ,,';
mappages["combatGrass2"].terrain[12] = '.. .. .. .. .. .. .. .. .. .. ,, ,, ,,';

mappages["combatGrass2"].features = new Array;


mappages["combatGrass2"].npcs = new Array;

mappages["combatGrass2"].desc = 'Combat';
mappages["combatGrass2"].music = 'Combat';
mappages["combatGrass2"].exitmap = '';
mappages["combatGrass2"].exitx = '';
mappages["combatGrass2"].exity = '';
mappages["combatGrass2"].wraps = 'None';
mappages["combatGrass2"].enterx = '6';
mappages["combatGrass2"].entery = '9';
mappages["combatGrass2"].seeBelow = '';
mappages["combatGrass2"].lightLevel = 'bright';
mappages["combatGrass2"].alwaysRemember = '0';
mappages["combatGrass2"].scale = '1';
mappages["combatGrass2"].enterscript = 'set_exits';
mappages["combatGrass2"].entertestscript = '';
mappages["combatGrass2"].exitscript = '';
mappages["combatGrass2"].exittestscript = 'check_escape';
mappages["combatGrass2"].linkedMaps = new Array("");

// manually added

mappages["combatGrass2"].set_exits = function(mapref) {
  maps_set_exits(mapref);
}

mappages["combatGrass2"].check_escape = function(mapref) {
  maps_check_escape(mapref);
}


// for all combat maps

function maps_set_exits(mapref) {
  mapref.Enter = function(who,frommap,fromx,fromy,tox,toy) {
    this.setExitToMap(frommap.getName());
    this.setExitToX(fromx);
    this.setExitToY(fromy);    
  }
}

function maps_check_escape(mapref) {
  mapref.ExitTest = function(who,frommap,fromx,fromy,tox,toy) {
    // ADD CODE here for checking for bribery
    
    return 1;  // allow to leave, later will depend on bribery
  }
}