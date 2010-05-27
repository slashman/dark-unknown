
var musiclist = new Object;
musiclist["Theme"] = "music/Hero Theme.mp3";
musiclist["Dark Unknown"] = "music/Dark Unknown.mp3";
musiclist["Towne"] = "music/Towne.mp3";
musiclist["Dark Towne"] = "music/Dark Towne.mp3";
musiclist["Dungeon"] = "music/Dungeon.mp3";
musiclist["Dark Dungeon"] = "music/Dark Dungeon.mp3";
musiclist["Mainland"] = "music/Mainland Wander.mp3";
musiclist["Island"] = "music/Island Wander.mp3";
musiclist["Magic"] = "music/Magic.mp3";
musiclist["Cave"] = "music/Cave.mp3";
musiclist["Ambrosia"] = "music/Ambrosia.mp3";
musiclist["Combat"] = "music/Combat.mp3";

var mapslist = new Object;
mapslist["darkunknown"] = "the Mainland";
mapslist["poverty"] = "the Towne of Poverty";
mapslist["magetower"] = "Mage's Tower";
mapslist["deathunending"] = "the Dungeon Death's Unending";
mapslist["worldsending"] = "the Dungeon World's Ending";
mapslist["olympus1"] = "Castle Olympus";
mapslist["olympus0"] = "Castle Olympus";
mapslist["olympus2"] = "Castle Olympus";
mapslist["nassau"] = " the Village of Nassau";
mapslist["gauntlet"] = "the Towne of Gauntlet";
mapslist["clearlagoon"] = "the Towne of Clear Lagoon";
mapslist["shadow"] = "the Dungeon Shadow";
mapslist["wealth"] = "the Towne of Wealth";
mapslist["guilddeath"] = "the Dungeon The Guild of Death";
mapslist["blackdragon"] = "Black Dragon's Castle";
mapslist["metaltwister"] = "the Dungeon The Metal Twister";
mapslist["onyx"] = "the Towne of Onyx";
mapslist["pitdespair"] = "the Dungeon Pit of Despair";
mapslist["stout"] = "the Towne of Stout";
mapslist["drash"] = "the Dungeon Mt Drash";
mapslist["vault"] = "the Dungeon Vault";
mapslist["ambrosia"] = "Ambrosia";
mapslist["island"] = "the Distant Island";
mapslist["cairns"] = "the Dungeon Cairns";

ailist = new Array("townsfolk","runaway","guard","melee","spellcaster","missile","adventurer","paladin","ranger");

var DAY = 0;
var NIGHT = 2;
var DAWN = 1;
var DUSK = 3;

var worldlight = new Object;
worldlight["bright"] = 1;
worldlight["dim"] = .5;
worldlight["dark"] = 0;

var LOS_THRESHOLD = 1;
var SHADOW_THRESHOLD = .3;