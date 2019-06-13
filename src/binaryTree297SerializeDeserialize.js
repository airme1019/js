/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(root == null) return
  let s = []
  dfsS(root, s)
  return s
};
var dfsS = function(root,s){
  if(root == null){ s.push(null)
}else{
  s.push(root.val)
  dfsS(root.left, s)
  dfsS(root.right, s)
}
    console.log(s)
  return s
}

var dfsD = function(data){
  if(data.length == 0) return null
  let root = new TreeNode(data[0])
  data.shift()
    console.log(data)
  root.left = dfsD(data)

  root.right = dfsD(data)
  return root
}
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(data.length == 0) return null

  return dfsD(data)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
