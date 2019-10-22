var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    let result = new TreeNode(preorder[0]);

    // find center
    const i=inorder.indexOf(preorder[0]);
    result.left = buildTree(preorder.slice(1, i+1), inorder.slice(0,i));
    result.right = buildTree(preorder.slice(i+1), inorder.slice(i+1));
    return result;
};
