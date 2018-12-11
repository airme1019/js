/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let result = true;
    function dfs(node, depth){
      if (result === false) {
				return;
		    }
      if (node === null) return depth-1;
      let leftD = dfs(node.left, depth+1);
      let rightD = dfs(node.right, depth+1);
      let diff = Math.abs(leftD - rightD);
      if(diff > 1) result = false;
      return Math.max(leftD,rightD);
    }
    dfs(root,1);
    return true;
};
var isBalanced2 = function(root) {
  return height(root) !== -1;
};

function height(node) {
  if (node === null) return 0;
  var l = height(node.left);
  var r = height(node.right);
  if (l === -1 || r === -1 || Math.abs(l - r) > 1) return -1;
  return Math.max(l, r) + 1;
}
