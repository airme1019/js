/**
https://leetcode.com/problems/symmetric-tree/

https://leetcode.com/problems/symmetric-tree/discuss/33073/JavaScript-recursive-and-iterative-solutions

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
var isSymmetric = function(root) {
    if(!root) return true;

    function dfs(s,t){
      if(!s && !t) return true;
      if(!s || !t || s.val !== t.val) return false;
      return dfs(s.left, t.right) && dfs(s.right, t.left);
    }
    return dfs(root.left, root.right);
};
