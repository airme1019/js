/*
226. Invert Binary Tree
recursive
DFS
*/

var invertBinary = function(root) {
  return root ? [root.left, root.right] = [invertBinary(root.right), invertBinary(root.left)] : root;
}

var invertBinary2 = function(root){
  var stack = [root];
  while(stack.length) {
    var n = stack.pop();
    if(!n){
      continue;
    }
    [n.left, n.right] = [n.right, n.left];
    stack.push(n.left, n.right);
  }
  return root;
}
