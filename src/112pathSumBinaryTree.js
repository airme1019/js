/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) {
        return false
    }
    sum -= root.val;
    if(!root.right && !root.left) {
        return sum === 0
    }
    return hasPathSum(root.right, sum) || hasPathSum(root.left, sum)
};
