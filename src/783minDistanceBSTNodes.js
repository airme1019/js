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
var minDiffInBST = function(root) {
    var arr = [];
    inorder(root, arr);
    console.log(arr);
    var minDiff = Number.MAX_VALUE;
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i+1] - arr[i];
        minDiff = Math.min(minDiff, temp)
    }
    return minDiff;
};
var inorder = function(root, arr) {
    if (root === null) return null;
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}
