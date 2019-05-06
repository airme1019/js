/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.res = []
    dfs(root,this.res)
    function dfs(root,res){
      if(!root) return
      dfs(root.left,res)
      res.push(root.val)
      dfs(root.right,res)
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
      return this.res.shift()
    } else {
      return null
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.res.length > 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
