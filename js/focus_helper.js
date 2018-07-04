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
    //adds event listener to all nodes to pass index through click event
    for(let i=0; i<=this.focusMax; i++){
      if(this.nodes[i] !== this.focusNode){
        this.nodes[i].tabIndex = -1;
      }else{
        this.nodes[i].tabIndex = 0;
      }
      this.nodes[i].addEventListener('click', (event, index) => this.pushKey(event, i));
    }

    this.el.addEventListener('keydown', event => this.pushKey(event));
  }

  pushKey(event, index){
    if(event.keyCode === keyDown || event.keyCode === keyRight){
      this.focusIndex === this.focusMax ? this.focusIndex = 0 : this.focusIndex++;
    }

    if(event.keyCode === keyUp || event.keyCode === keyLeft){
      this.focusIndex === 0 ? this.focusIndex = this.focusMax : this.focusIndex--;
    }

    if(event.type === 'click'){
      this.focusIndex = index;
    }

    this.changeTabFocus(this.focusIndex);

  }

  changeTabFocus(index){
    this.focusNode.tabIndex = -1;

    this.focusNode = this.nodes[index];
    this.focusNode.tabIndex = 0;
    this.focusNode.focus();
  }

}

let mapGroup;

function indexObjects(){
  // mapGroup = new FocusGroup('#map','.leaflet-marker-icon');
  markerGroup = new FocusGroup('.leaflet-marker-pane','.leaflet-marker-icon');
  linkGroup = new FocusGroup('.leaflet-control-attribution', 'a');
}