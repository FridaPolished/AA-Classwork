function breadthFirstSearch(startingNode, targetVal) {

   let queue = [startingNode];
   let seen = [];

   while(queue.length){
       let node = queue.shift();
       seen.push(node);
       if (node.val === targetVal){
           return node;
       } else {
          if (node.neighbors){
            node.neighbors.forEach(neighbor => {
               if(!seen.includes(neighbor)){
                 queue.push(neighbor)
                }
            });
          } 
       }
   }
   return null;
}

module.exports = {
    breadthFirstSearch
};