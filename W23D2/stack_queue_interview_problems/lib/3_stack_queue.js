// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    pop() {
        if (this.length === 0) return null;

        if (this.length === 1) {
            let rem = this.top;
            this.top = null;
            this.bottom = null;
            this.length --;
            return rem;
        }
         else {
            let rem = this.top;
            this.top = this.top.next;
            this.length--;
            return rem;
        }
    }

    push(obj) {
        let {value, next} = obj;
        let node = new Node(value);

        if (this.length === 0) {
            
            this.top = node;
            this.bottom = node;
            this.length++;
            return this.length;
        } else {
            let temp = this.top;
            node.next = temp;
            this.top = node;
            this.length++;
            return this.length;
        }
    }

    size(){
        return this.length;
    }


}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
        this.length = 0;
    }


    enqueue(val){
        let node = new Node(val);

        if(this.length === 0){
            this.front = node;
            this.back = node;
            this.length ++;
            // console.log("inserted", node.value)
            return this.length;
        } else {
            this.back.next = node;
            this.back = node;
            this.length ++;
            // console.log("inserted", node.value)
            return this.size();
        }
    }

    dequeue(){
        if(this.length === 0) return null;

        if( this.length === 1){
            let temp = this.front;
            this.front = null;
            this.back = null;
            this.length --;
            return temp;
        } else {
            // console.log(this.front.value, " initial front")
            let temp = this.front;
            // console.log(this.front.next, "front next")
           
            this.front = this.front.next;
            this.length --;
            // console.log("dequeued", temp)
            // console.log(this.front.value, "final front")
            // console.log(this.length, "length")
            // console.log(this)
            return temp;
        }
    }

    size(){
        return this.length;
    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
