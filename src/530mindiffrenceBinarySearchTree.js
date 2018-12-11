var getMinimumDifference = function(root) {
    var prev = Infinity;
    var totalMin = Infinity;

    function traverse(node) {
        if (!node) {
            return;
        }

        traverse(node.left);

        totalMin = Math.min(totalMin, Math.abs(node.val - prev));
        prev = node.val;

        traverse(node.right);
    }

    traverse(root);

    return totalMin;
};
