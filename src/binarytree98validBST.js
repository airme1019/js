/*Validate Binary Search Tree*/
function isValidBST(root) {
  const bound = (root, lower, upper) => {
    if (!root) {
      return true;
    }
    if (lower && lower.val >= root.val) {
      return false;
    }
    if (upper && upper.val <= root.val) {
      return false;
    }
    return bound(root.left, lower, root) && bound(root.right, root, upper);
  }
  return bound(root);
}
