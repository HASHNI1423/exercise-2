class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;
    return newNode;
  }

  shift() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length -= 1;

      if (!this.length) {
        this.tail = null;
      }

      return nodeToRemove;
    }
  }

  pop() {
    if (!this.tail) {
      return null;
    } else {
      let currentNode = this.head;
      let preTail = this.head;
      while (currentNode.next) {
        preTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = preTail;
      this.tail.next = null;
      this.length -= 1;
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let count = 0;
      let currentNode = this.head;

      while (count < index) {
        currentNode = currentNode.next;
        count += 1;
      }

      return currentNode;
    }
  }

  remove(index) {
    // remove a node "outside" the List (=> invalid)
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      // remove a node from the beginning of the List
      return this.shift();
    } else if (index === this.length - 1) {
      // remove a node from the end of the List
      return this.pop();
    } else {
      // find the node before the nodeToRemove
      const preNodeToRemove = this.get(index - 1);

      // we want to return the removed node later
      const nodeToRemove = preNodeToRemove.next;

      // set the node after the node to remove (=C) as the new node after the node before the node to remove (=A)
      preNodeToRemove.next = nodeToRemove.next; // from A -> B -> C to A -> C

      // decrease the List's length by 1
      this.length -= 1;

      // return the new node
      return nodeToRemove;
    }
  }
}

const newSLL = new SinglyLinkedList();
newSLL.push("A");
newSLL.push("B");
newSLL.push("C");

console.log(newSLL);


console.log(newSLL.remove(1));


console.log(newSLL);