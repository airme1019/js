/* https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]
*/
var zigzagLevelOrder = function(root) {
    var queue = []
    var helper = function (node,level) {
      if(node == null) return
      if(level > queue.length) {
        queue.push([])
      }
      queue[level-1].push(node.val)
      console.log('level '+level)
        helper(node.left, level+1)
        helper(node.right,level+1)
    }
    helper(root, 1)
    for (let i = 1; i < queue.length; i +=2) {
      queue[i].reverse()
    }
    return queue
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var node9 = new TreeNode(9)
var node15 = new TreeNode(15)
var node7 = new TreeNode(7)
var node20 = new TreeNode(20)
node20.left = node15
node20.right = node7

var root = new TreeNode(3)
root.left = node9
root.right = node20

console.log(zigzagLevelOrder(root))
