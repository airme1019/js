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
const maxPathSum = function(root){
  var max = Number.MIN_SAFE_INTEGER
  maxSum(root, 0)
  return max

  function maxSum(node){
    if(node === null) return 0
    let left = Math.max(maxSum(node.left),0),
    right = Math.max(maxSum(node.right),0)
    max = Math.max(max, node.val+left+right)
    return Math.max(left+node.val, right+node.val, node.val+left+right)
  }
}

var maxPathSum2 = function(root) {

  var max = Number.NEGATIVE_INFINITY;

  function getMaxSum(node) {
    if (!node) return 0;
    var leftSum = getMaxSum(node.left);
    var rightSum = getMaxSum(node.right);

    // if Node by itself in big then children + Node
    let max_single = Math.max(Math.max(leftSum,rightSum)+node.val, node.val);

    // if the Node is the root node in the path
    let max_top = Math.max(max_single,leftSum+rightSum+node.val);

    // Store Maximum result
    max = Math.max(max, max_top);

    return max_single;
  }
  getMaxSum(root);
  return max ;

};
