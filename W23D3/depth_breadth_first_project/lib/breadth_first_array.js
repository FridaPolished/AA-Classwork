function breadthFirstArray(root) {
    if(!root) return [];

   let res = [];
    let queue = [root];

    while(queue.length){
        let node = queue.shift();
        if(node.left){
            queue.push(node.left);
            res.concat(breadthFirstArray(node.left))
        }
        res.push(node.val)
        if(node.right){
            queue.push(node.right);
            res.concat(breadthFirstArray(node.right))
        }
    }
   return res;
}

module.exports = {
    breadthFirstArray
};