/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    var reversed = [];
    search(root,1);
    function search(node,level){
      if(node){
        if(reversed.length<level){
          reversed.unshift([]);
        }
        reversed[reversed.length-level].push(node.val);
        search(node.left,level+1);
        search(node.right,level+1);
      } else {return;}
    }
    return reversed;
};
