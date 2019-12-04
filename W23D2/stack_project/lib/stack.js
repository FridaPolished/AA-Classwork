// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom =  null;
    this.length = 0;
  }

  pop(){
    if(this.length === 0) return null;

    if(this.length === 1){
      let rem = this.top;
      this.top = null;
      this.bottom = null;
      this.length = 0;
      return rem.value;
    } else {
      let rem = this.top;
      this.top = this.top.next;
      this.length --;
      return rem.value;
    }
  }

  push(val){
    let node = new Node(val);

    if(this.length === 0){
      this.top = node;
      this.bottom = node;
      this.length++;
      return this.length;
    } else {
      let temp = this.top;
      node.next = temp;
      this.top = node;
      this.length ++;
      return this.length;
    }
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
