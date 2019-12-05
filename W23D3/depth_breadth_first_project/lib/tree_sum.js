function treeSum(root) {
    if (!root) return 0;

    let sum = 0;

    let queue = [root];
    while(queue.length){
        let node = queue.shift();
        sum += node.val
        if (node.left){
            sum += treeSum(node.left);
        }
        if (node.right){
            sum += treeSum(node.right);
        }
    }
    return sum;
}


module.exports = {
    treeSum
};