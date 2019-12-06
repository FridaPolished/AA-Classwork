
// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let midIdx = Math.floor(nums.length / 2);

  let rootVal = nums[midIdx];
  let root = new Node(rootVal);

  let leftTree = nums.slice(0, midIdx);
  let rightTree = nums.slice(midIdx + 1);

  root.left = sortedArrayToBST(leftTree);
  root.right = sortedArrayToBST(rightTree);

  return root;
}