class Node {
	constructor(value,node){
  	this.value = value;
  	this.next=node;
  }	
}

class LinkedList{
	constructor(){
    this.head = null
    console.log('Starting')
  }
  push=(value)=>{
    const newNode = new Node(value,null);
  	if(this.head != null)
        newNode.next = this.head;        
    this.head = newNode;
  }
  pop = ()=>{
  	this.head = this.head.next;
  }
}

export default LinkedList;