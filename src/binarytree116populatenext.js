/*
Populating Next Right Pointers in Each Node
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
   Definition for a Node.
  function Node(val,left,right,next) {
      this.val = val;
     this.left = left;
    this.right = right;
     this.next = next;
   };
 */

var connect = function(root) {
  while(root !== null && root.left !== null) {
    let cur = root
    while(cur){
    cur.left.next =  cur.right
    cur.right.next = cur.next == null ? null : cur.next.left
    cur = cur.next
  }
    root = root.left
  }
  return root
};

var root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

console.log(connect(root))
