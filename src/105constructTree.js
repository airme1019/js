/*https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/34553/Simple-JavaScript-solution*/

var buildTree = function(preorder, inorder) {
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) return null; // sanity check

        var value = preorder[p1],           // get the root value
            index = inorder.indexOf(value), // get inorder position
            nLeft = index - i1,             // count nodes in left subtree
            root  = new TreeNode(value);    // build the root node

        // build the left and right subtrees recursively
        root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
        root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

//var preorder = [1,2,3,5,3,6]
//var inorder = [4,2,5,1,3,6]

var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]
