//https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array.
// Note that it is the kth largest element in the sorted order, 
// not the kth distinct element.
// Example 1:

// Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5
// Example 2:

// Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
// Output: 4
// You may assume k is always valid, 1 ≤ k ≤ array's length.

function findKthLargest(nums, k){
  // console.log(nums);
  let heap = new MaxHeap();
  nums.forEach(element => {
    heap.insert(element)
  }); 
  
  
  let counter = 1;
  while (k > counter){
    // console.log(heap, "initial state")
    
    heap.deleteMax()
    // console.log(heap, "intermediate state")
    
    counter ++;
  }
  // console.log(heap, "final state")
  return heap.array[1];
}

class MaxHeap {
  constructor() {
    this.array = [null];
  }


  getParent(idx) {
    if (idx === 1) return;

    let parent = Math.floor(idx / 2);
    return parent;
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let arr = this.array;
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if (leftVal === undefined) leftVal = - Infinity;
    if (rightVal === undefined) rightVal = - Infinity;

    if (arr[idx] > leftVal && arr[idx] > rightVal) return;

    let swapIdx;

    if (leftVal < rightVal) {
      swapIdx = rightIdx;
    } else {
      swapIdx = leftIdx;
    }
    [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];

    this.siftDown(swapIdx);
  }


  deleteMax() {
    if (this.array.length === 2) return this.array.pop();

    if (this.array.length === 1) return null;

    let max = this.array[1];
    this.array[1] = this.array.pop();

    this.siftDown(1);
    return max;
  }

}

// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))// 4
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5