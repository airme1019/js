var kthSmallest = function(root, k) {
  var stack = [], res = []
  var cur = root
//  stack.push(root)

  while(cur || stack.length > 0 ) {
    while(cur){
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur)
    cur = cur.right
  }
  console.log(res)
  return res
};
/*
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
*/

var kthSmallest2 = function (root,k) {
  var res = []
  var helper = function (node) {
    if(node == null) return
    helper(node.left)
    res.push(node.value)
    helper(node.right)
  }
  helper(root)
  console.log(res)
  return res[k-1]
}
