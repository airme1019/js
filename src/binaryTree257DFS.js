/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    var arr = [];
    leafpath(root, arr, "");
    var res = arr.map(a => {
        return a.substr(0, a.length - 2);
    });
    return res;

};
var leafpath = function(root, arr, str) {
    if (root === null) return null;
    str += root.val + "->";
    if (root.right === null && root.left === null)
        arr.push(str);
    leafpath(root.left, arr, str);
    leafpath(root.right, arr, str);
}
