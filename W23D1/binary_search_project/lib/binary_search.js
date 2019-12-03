function binarySearch(array, target) {
    if(array.length === 0){
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let rigth = array.slice(0, midIdx);
    let left = array.slice( midIdx + 1);

    if (array[midIdx] < target){
        return binarySearch(left, target);
    } else if ( array[midIdx] > target){
        return binarySearch(rigth, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) {
        return - 1;
    }

    let midIdx = Math.floor(array.length / 2);
    let left = array.slice(0, midIdx);
    let rigth = array.slice(midIdx + 1);

    if (array[midIdx] > target) {
        return binarySearchIndex(left, target);
    } else if (array[midIdx] < target) {
        let subResult =  binarySearchIndex(rigth, target);
        if (subResult != -1){
            return subResult + midIdx + 1
        } else {
            return -1
        }
    } else {
        return midIdx;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};