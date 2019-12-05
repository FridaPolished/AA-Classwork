function depthFirstSearch(root, targetVal) {
    let stack = [root];

    while(stack.length){
        let node = stack.pop();

        if(node.val === targetVal){
            return node;
        } else {
            if(node.right) stack.push(node.right);
            if(node.left) stack.push(node.left);
        }
    }
    return null;
}


module.exports = {
    depthFirstSearch
};