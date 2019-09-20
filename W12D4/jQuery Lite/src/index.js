const DomNodeCollection = require('./dom_node_collection');


// $(() => {
document.addEventListener('DOMContentLoaded', () => {
  function $l(selector) {
    if (selector instanceof HTMLElement || typeof selector === 'string') {
      const nodeList = document.querySelectorAll(selector);
      const nodeListArray = Array.from(nodeList);
      const nodeCollection = new DomNodeCollection(nodeListArray);
      return nodeCollection; 
    }
  }   
  window.$l = $l;



});
// });
