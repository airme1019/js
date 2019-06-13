/*
Given a sorted linked list and a value to insert,
write a function to insert the value in sorted way.
*/
function ListNode (val) {
  this.val = val
  this.next = null
}
var head = new ListNode(0)
head.next = 1
//console.log(head)
var insertLinkedList = function (insertedNode,linkedList) {
  if (insertedNode.val < head.val){
    insertedNode.next = head
  } else {
    currentNode = head
    while (currentNode.next && current.next.val < insertedNode.val) {
      currentNode = currentNode.next
    }
    insertedNode.next = currentNode.next.next
    currentNode.next = insertedNode
  }
}
