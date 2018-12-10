/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */ 

var flatten = function (root) {
    if (!root) {
        return;
    }
    let list = [];
    dfs(root, list);
    root.left = null;
    let cursor = root;
    for (let i = 1; i < list.length; i++) {
        cursor.right = new TreeNode(list[i].val);
        cursor = cursor.right;
    }
};

var dfs = function (root, list) {
    if (!root) {
        return;
    }
    list.push(root);
    if (root.left) {
        dfs(root.left, list);
    }
    if (root.right) {
        dfs(root.right, list);
    }
}
