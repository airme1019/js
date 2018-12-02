/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/
104. Maximum Depth of Binary Tree
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var maxDepth = function(root) {
    return (root === null) ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
