var makeLinkedList = function(){
  var list = {};
  list.counter = 0;
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var node = makeNode(value);
    var index = this.counter;
    // if the head is null, set head to somehow mean this node
    if (this.head === null) {
      this.head = {
        index: index,
        value: value
      };
    }
    this[index] = node;
    // set the previous tail to point to node, and add node to list.tail
    if (this.tail !== null) {
      this[this.tail.end].next = index;
    }

    this.tail = {
      end: index,
      value: value
    };

    this.counter++;
  };

  list.removeHead = function(){
    //this[this.head.index] = old head obj
    //this[this.head.index].next = index of new head obj
    //this [ this[this.head.index].next ] = new head obj
    if (this.head === null) {
      return null;
    }
    var oldHead = this[this.head.index];
    var newHeadIndex = this[oldHead].next;
    var newHead = this[ newHeadIndex ];


    var result = this.head.value;

    delete oldHead;
    // deleting the old head
    this.head.index = newHeadIndex;
    this.head.value = newHead.value;
    return result;
    //remove the node at the head reference
    // make the next value of previous head the NEW head.
  };

  list.contains = function(target){
    // start at the head, and check value to see if it matches target,
    // if the value does not equal target, check the .next node
    // continue until you find your target and return true
    // if value is never found, return false
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

