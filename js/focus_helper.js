const keyEnter = 13;
const keySpace = 32;
const keyLeft = 37;
const keyRight = 39;
const keyUp = 38;
const keyDown = 40;

class FocusGroup{
  constructor(nodeId, nodeClass){
    this.nodeId = nodeId;
    this.nodeClass = nodeClass;
    this.el = document.querySelector(nodeId);
    this.nodes = Array.from(this.el.querySelectorAll(nodeClass));
    this.focusIndex = 0;
    this.focusMax = this.nodes.length - 1;
    this.focusNode = this.nodes[this.focusIndex];

    this.el.addEventListener('keydown', event => this.pushKey(event));
  }

  pushKey(event){
    console.log(this.nodes);
  }

}

//variables are kept in global scope
//objects will not be DOM accessible if variables
//are only defined in the following function
let group1;
let mapGroup;

function indexObjects(){
  mapGroup = new FocusGroup('#map','.leaflet-marker-icon');
}