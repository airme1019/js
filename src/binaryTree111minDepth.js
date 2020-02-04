/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root) return 0;
  var result;
  function minHeight(root, depth){
      if(!root.left && !root.right){
          result = Math.min(result || depth, depth)
      }
      if(root.left) minHeight(root.left, depth + 1);
      if(root.right) minHeight(root.right, depth + 1);
  }
  minHeight(root, 1);
  return result;
};
