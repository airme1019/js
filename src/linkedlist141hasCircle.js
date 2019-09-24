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
