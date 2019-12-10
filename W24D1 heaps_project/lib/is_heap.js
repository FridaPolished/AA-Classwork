// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array.length === 0) return true;

    let arr = array.slice(2);
    return arr.every(ele => array[idx] > ele && isMaxHeap(arr.slice(1), idx));
}


module.exports = {
    isMaxHeap
};