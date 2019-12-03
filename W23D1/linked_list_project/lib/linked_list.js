// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val,
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        } else {
            this.tail = this.head;
            while(this.tail.next !== null){
                this.tail = this.tail.next;
            }
            this.tail.next = newNode;
            this.tail = newNode;
        } 
        this.length ++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head){
            return undefined;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0 ;
            return;
        }

        let cur = this.head;
        let prev = null;
        while(cur.next !== null){
            prev = cur;
            cur = cur.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length --;
        return cur;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);

        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length ++;
            return this;
        }

        let prev = this.head;

        if (this.head){
            this.head = node;
            this.head.next = prev;
            this.length ++;
        }

        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let prev = this.head;
        
        if(this.head){
            this.head = prev.next;
            this.length --;
        }

        return prev;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let cur = this.head;
       
        while(cur) {
            if (cur.value === target) return true;
            cur = cur.next; 
        }  
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length) return null;
        
        let count = 0;
        let cur = this.head;
        while (count !== index && cur) {
            cur = cur.next;
            count ++;
        } 
        return cur;
    }
    
    // TODO: Implement the set method here
    set(index, val) {
        let flag = this.get(index);
        if(flag){
            flag.value = val;
            return true;
        } else {
            return false;
        }
    }
    
    // TODO: Implement the insert method here
    insert(index, val) {

        if(index > this.length-1) return false;

        if(index === 0){
            this.addToHead(val);
        }

        let prev = this.get(index- 1);
        let node = new Node(val);
        if (prev){
            node.next = prev.next;
            prev.next = node;
            this.length ++;
            return true;
        }
        return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length ) return undefined;

        if (index === 0) {
            this.removeHead();
        }

        let ele = this.get(index);
        let newPrev = this.get(index - 1);
        newPrev.next = newPrev.next.next;
        this.length --;
        return ele;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
