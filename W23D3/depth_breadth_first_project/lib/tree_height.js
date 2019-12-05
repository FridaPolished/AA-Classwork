function treeHeight(root) {
    if (!root) return -1;

    let maxheight = 0;
    let queue = [ root ];

    while(queue.length){
        let node = queue.shift();
        curHeight = 0;
        if(node.left || node.right){
            curHeight += 1;

            if (node.left) {
                curHeight += treeHeight(node.left);
            }
            if (node.right) {
                curHeight += treeHeight(node.right);
            }
            if (curHeight > maxheight){
                maxheight = curHeight;
            }
        }
    }
    return maxheight;
}


module.exports = {
    treeHeight
};