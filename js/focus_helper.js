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

    //sets the tabIndex of all Array-like objects passed
    for(let node of this.nodes){
      if(node !== this.focusNode){
        node.tabIndex = -1;
      }else{
        node.tabIndex = 0;
      }
    }

    this.el.addEventListener('keydown', event => this.pushKey(event));
    this.el.addEventListener('click', event => this.changeFocus(event));
  }

  pushKey(event){
    if(event.keyCode === keyDown || event.keyCode === keyRight){
      this.focusIndex === this.focusMax ? this.focusIndex = 0 : this.focusIndex++;
      console.log(this.focusIndex);
    }

    if(event.keyCode === keyUp || event.keyCode === keyLeft){
      this.focusIndex === 0 ? this.focusIndex = this.focusMax : this.focusIndex--;
      console.log(this.focusIndex);
    }

  }

  changeTabFocus(index){

  }

}

let group1;
let mapGroup;

function indexObjects(){
  mapGroup = new FocusGroup('#map','.leaflet-marker-icon');
}