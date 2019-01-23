/*
write the following linked-list functions (methods)
- push(node)
- insertAtIndex(node, index)
- findIndices(value)
*/

class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

  push(item){
    if(this.head === null){
      this.head = item
    }
    else {
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = item
    }
    this.size++
  }

  insertAtIndex(node, index){
    let i = 0
    let previous = this.head
    while(i < index){
      temp = previous.next
      previous.next = node
      node.next = temp
      i++
    }
  }

  findIndices(value){
    let current = this.head
    let i = 0
    let indices = []
    while(i < this.size){
      if(current.element === value){
        indices.push(i)
      }
      current = current.next
      i++
    }
    return indices
  }
}
