// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

//preorder = self, left, right
///inorder = left, self, right

function buildTree(preorder, inorder) {
  if(preorder.lenght === 0 && inorder.lenght === 0) return null;

  let el = preorder[0];
  let root = new TreeNode(el);

  let midIdx = inorder.indexOf(root);

  let leftInorder = inorder.slice(0, midIdx);
  let rightInorder = inorder.slice(midIdx + 1);

  let leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

  let subTreeLeft =  buildTree(leftPreorder, leftInorder);
  let subTreeRight =  buildTree(rightPreorder, rightInorder);

  root.left = subTreeLeft;
  root.right = subTreeRight;

  return root;
}
