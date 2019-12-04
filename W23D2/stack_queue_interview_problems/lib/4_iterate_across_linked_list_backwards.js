// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished, 
// return a string representing the original linked list's values backwards 
// in the following format:
//
//                             'A -> B -> C -> D' 
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
    // TODO: Implement the iterateAcrossLinkedListBackwards function here
    if(linkedList.length === 0) return "";
    
    let  result = [];

    if(linkedList.length === 1){
        return `${linkedList.head.value}`
    }

    let cur = linkedList.head;
    let start = cur;
    let nxt = null;
    let prev = null;
    
    while (nxt = cur.next) { //it stops in the tail because the original tail does not have a next?
        if(cur === linkedList.head){
            result.unshift(cur.value)
        } else { 
            result.unshift(cur.value + " ->")
        }
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    
    result.unshift(linkedList.tail.value + " ->")
    linkedList.head = cur;
    linkedList.head.next = prev;
    linkedList.tail = start;
    


    return result.join(" ");
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
