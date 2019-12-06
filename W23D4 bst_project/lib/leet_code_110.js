// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if(!root) return true;
  let leftHeight = treeHeight(root.left);
  let rightHeight = treeHeight(root.right);

  let dif = Math.abs(leftHeight - rightHeight) <= 1 ? true : false;
  let subTrees = isBalanced(root.left) && isBalanced(root.right);

  return dif && subTrees;
}

function treeHeight(root) {
  if (!root) return -1;

  let maxheight = 0;
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    curHeight = 0;
    if (node.left || node.right) {
      curHeight += 1;

      if (node.left) {
        curHeight += treeHeight(node.left);
      }
      if (node.right) {
        curHeight += treeHeight(node.right);
      }
      if (curHeight > maxheight) {
        maxheight = curHeight;
      }
    }
  }
  return maxheight;
}