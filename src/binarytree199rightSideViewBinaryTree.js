/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var rightArray = [];
    function search(node,level){
      if(node === null) return;
      if(rightArray.length<level){
        rightArray.push(node.val);
      }
      search(node.right, level+1);
      search(node.left, level+1);
    }
    return rightArray;
};
