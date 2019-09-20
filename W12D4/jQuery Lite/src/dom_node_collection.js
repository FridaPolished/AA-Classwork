function DomNodeCollection(nodes) {
  this.nodes = nodes; 
}

DomNodeCollection.prototype.html = function (ele) {
    if (typeof ele === "string") {
      this.nodes.forEach(elm => {
        elm.innerHTML = ele;
      });
    } else {
        return this.nodes[0].innerHTML;
    }
};

DomNodeCollection.prototype.empty = function () {
  // this.nodes.forEach(node => {
    // node.innerHTML = '';   
  // });

  this.html('');

  // return this.nodes; 
};

DomNodeCollection.prototype.append = function(newNode) {
  this.nodes.forEach( node => {
    node.outerHTML = newNode;
  });
};

DomNodeCollection.prototype.attr = function () {

};

DomNodeCollection.prototype.removeClass = function () {

};

DomNodeCollection.prototype.addClass = function () {

};

//Traversal

DomNodeCollection.prototype.children = function () {

};

DomNodeCollection.prototype.parent = function () {

};

DomNodeCollection.prototype.find = function () {

};

DomNodeCollection.prototype.remove = function () {

};



module.exports = DomNodeCollection;