/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var hasCycle = function(head) {
  let hash = {}
  while(head){
    if(hash[head]) return true
    hash[head] = 1
    head = head.next
  }
  return -1
};

var hasCycle2 = function(head){
  if(head == null || head.next == null) return -1
  let slow = head
  let fast = head
  while(slow && fast) {
    if(slow == fast) return true
    slow = slow.next
    fast = fast.next.next
  }
  return -1
}

JS Result
EDIT ON
class Node {
   constructor(data, next = null) {
       this.data = data;
       this.next = next;
   }
}

class LinkedList {
   constructor() {
       this.head = null;
   }

   insertHead(data) {
       this.head = new Node(data, this.head);
   }
   
}

function circular(list) {
   let moveByOne = list.head;
   let moveByTwo = list.head;

   while (moveByTwo.next && moveByTwo.next.next) {
       moveByOne = moveByOne.next;
       moveByTwo = moveByTwo.next.next;

       if (moveByTwo === moveByOne) return true;
   }

   return false;
}
