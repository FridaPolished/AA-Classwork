function maxValue(node, visited=new Set()) {
    let max = node.val;
    let queue = [node];
    
    // visited.add(node.val);
    while(queue.length){
        let n = queue.shift();
        // console.log(n);
        // console.log(n.neighbors)
        // console.log(visited)
        if (visited.has(n.val)) return;
        
        visited.add(n.val);
        if (n.val > max){
            max = n.val;
        }
        if(n.neighbors){
            n.neighbors.forEach(neighbor => {      
                if(!visited.has(neighbor.val)){
                    queue.push(neighbor)
                }
            });
        }
    }
    return max;
}

module.exports = {
    maxValue
};