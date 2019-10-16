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
var findBottomLeftValue2 = function(root) {
    let temp = {
        max: 1,
        leftbottom: root.val
    };
    return dfs(root, 1, temp);
};

var dfs = function(root, level, temp) {
    if (temp.max < level) {
        temp.max = level;
        temp.leftbottom = root.val;
    }

    if (root.left) {
        dfs(root.left, level + 1, temp);
    }
    if (root.right) {
        dfs(root.right, level + 1, temp);
    }

    return temp.leftbottom;
};

var findBottomLeftValue2 =function(root){
  var res = [];
  var leftVal;
  helper(root,1);
  return leftVal;
  function helper(node,level){
    if(!node) return null;
    //if(node.left === null && node.right === null) return node.val;
    if(level>res.length){
      res.push(node.val);
      leftVal = node.val;
    //  console.log("here");
    }
    helper(node.left, level+1);
    helper(node.right, level+1);
    //console.log(res);

    return leftVal;
  }

}
