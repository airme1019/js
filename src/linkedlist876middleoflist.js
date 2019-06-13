var ListNode = function (val) {
  this.val = val
  this.next = null
}
var middleNode = function(head) {
  let listArr = []
  let currentNode = head
  while(currentNode) {
    listArr.push(currentNode.val)
    currentNode = currentNode.next
  }
  let middleIndex = Math.floor(listArr.length / 2)
  while(middleIndex){
    head = head.next
    middleIndex --
  }
  return head
};
