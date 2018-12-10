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
var findBottomLeftValue = function(root) {
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
