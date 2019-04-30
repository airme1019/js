function ListNode (val) {
  this.val = val
  this.next = null
}
/*
Add two numbers represented by linked lists
Given two numbers represented by two linked lists,
write a function that returns sum list. The sum list is linked list representation of
addition of two input numbers. It is not allowed to modify the lists.
Also, not allowed to use explicit extra space (Hint: Use Recursion).

Example

Input:
  First List: 5->6->3  // represents number 563
  Second List: 8->4->2->1 //  represents number 842
Output
  Resultant list: 1->4->0->5  // represents number 1405
*/
var addTwoNumbers = function(l1, l2) {
    let s1 = [], s2 = []
    while (l1) {
      s1.push(l1.val)
      l1 = l1.next
    }
    while (l2) {
      s2.push(l2.val)
      l2 = l2.next
    }

    let sum = 0
    let list = new ListNode(0)
    while(s1.length || s2.length) {
      if (s1.length > 0 ) sum += s1.pop()
      if (s2.length > 0 ) sum += s2.pop()
      list.val = sum % 10
      let head = new ListNode(Math.floor(sum/10))
      head.next = list
      list = head
      sum = Math.floor(sum/10)
    }
    return list.val == 0 ? list.next : list
};
