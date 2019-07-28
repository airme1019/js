var printTree = function(root) {
    if(root.val == null) return []
    let res = []
    if(root.left) res.push(...helper(root.left, res))
    res.push(root.val)
    if(root.right) res.push(...helper(root.right, res))

    return res
};
var helper = function(r, res){

  if(r.left) helper(r.left, res)
  res.push(r.val)
  if(r.right) helper(r.right, res)

  return res
}
