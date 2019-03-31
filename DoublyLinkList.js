class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;

  }
}

class LinkList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 0;
  }


  append(value) {
    const newNode = new Node(value);
    
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {

    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;


  }


  insert(index,value){

    if(index > this.length){
      return this.append(value);
    }
    const newNode = new Node(value);

    let leader = this.traverseNode(index-1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }

remove(index){
 if(index > this.length){
   return "No data";
 }

let leader  = this.traverseNode(index-1);
let removeNode = leader.next;
let follower = removeNode.next;
leader.next = follower;
follower.prev = leader;
this.length--;




}
traverseNode(index){
  let counter = 0;
  let currentVal = this.head;
  while(counter < index){
    currentVal = currentVal.next;
    counter++
  }
  return currentVal;
}

  printValue() {
    let array = [];
    let currentVal = this.head;
    while (currentVal !== null) {
      array.push(currentVal.value)
      currentVal = currentVal.next;
    }

    return array;
  }

}

let a = new LinkList(10);
a.append(20);
a.prepend(5);
a.insert(20,15);
a.remove(2);
a.insert(2,30);
 a.append(100);
//a.printValue();
