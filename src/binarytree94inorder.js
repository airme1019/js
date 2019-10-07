/*
https://leetcode.com/problems/binary-tree-inorder-traversal/
*/
var inorderTraversal = function(root) {
  if(root == null) return null
  let res = []
  helper(res, root)
  return res
}
var helper= function(res,node) {
  if(node.left) helper(res, node.left)
  res.push(node.val)
  if(node.right) helper(res, node.right)
}

var inorderTraversal2 =  function (root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}
