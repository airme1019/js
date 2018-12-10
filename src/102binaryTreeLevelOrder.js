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
var levelOrder = function(root) {
    if(!root) return [];
    var res = [];
    search(root,1);
    function serach(node,level){
      if(node){
        if(res.length<level){
          res.push([]);
        }
        res[res.length-1].push(node.val);
        search(node.left,level+1);
        search(node.right,level+1);
      } else return;
    }
};
