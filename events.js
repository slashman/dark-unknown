// Finished but untested


function DUListener() {
  this.listeners = new Collection();
}
DUListener.prototype = new Object();

DUListener.prototype.addListener = function(newlistener) {
  this.listeners.addTop(newlistener);
}

DUListener.prototype.clearListeners = function() {
  var allears = this.listeners.getAll();
  $.each(allears, function(idx, val) {
    if (val.linkedtomap) {
      var mapexists = maps.getMap(val.linkedtomap);
      if (mapexists === undefined) {
        this.clearListener(val.name);
      }
    }
  });
}

DUListener.prototype.clearListener = function(listname) {
  findlistener = this.listeners.getByName(listname);
  if (findlistener) {
    if (debug) { dbs.writeln("<span style='color:magenta'>Deleting listener " + findlistener.getName() + ".<br /></span>"); }
    this.listeners.deleteFrom(findlistener);
  }
}

DUListener.prototype.sendEvent = function(ev) {
  this.clearListeners();
  
  var allears = this.listeners.getAll();
  if (allears.length === 0) { 
    if (debug) { dbs.writeln("<span style='color:magenta'>Event sent, no listeners.<br /></span>"); }
    return;
  }
  $.each(allears, function(idx, val) {
    if (val.listenforname === ev.name) {
      var flagsmatch = 1;
      $.each(val.flagsreq, function(idx2, val2) {
        if (ev.idx2 && (ev.idx2 === val2)) {
          if (debug) { dbs.writeln("<span style='color:magenta'>Flag " + idx2 + " matched - values " + val2 + ".<br /></span>"); }
        } else {
          flagsmatch = 0;
        }
      });
      if (flagsmatch) {
        this.callfunc(ev);
      }
    }
  });
}

function DUEar() {
  this.name;
  this.listenforname;
  this.callfunc;
  this.flagsreq = {};
  this.linkedtomap;  // name
}
DUEar.prototype = new Object();

DUEar.prototype.getName = function() {
  return this.name;
}

function DUEvent() {
  this.name;
  this.source;
  this.flags;
}
DUEvent.prototype = new Object();