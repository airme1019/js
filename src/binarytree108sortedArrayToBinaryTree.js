/**
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    function bst(start, end){
      if(start>end) return null;
      var mid = Math.floor((start+end)/2);
      var node = new TreeNode(nums[mid]);
      node.left = bst(start, mid);
      node.right = bst(mid+1, end);
      return node;
    }
    if(nums.length === 0) return null;
    return bst(0, nums.length);
};
