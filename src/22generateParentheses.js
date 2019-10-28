var generateParenthesis = function(n) {
    let res = []
    backTrack(res,'',0,0,n)
    return res
};

var backTrack = function(res, current, open, close, n) {
  console.log(current)
  if(current.length == 2*n) {
    res.push(current)
    return
  }

  if ( open < n) {
    backTrack(res,current+'(', open+1, close,n)
    console.log('o '+open+' c '+close)
  }
  if (close < open) {
    backTrack(res,current+')',open, close+1,n)
  }
}

console.log(generateParenthesis(4))

/* DFS */
var generateParenthesis2 = function(n) {
    let res = []
    dfs(res,n,n,'')
    return res
};
var dfs = function (res, left, right,string) {
  if(left>right) return
  //console.log('left: '+ left +' right: '+right)
  //console.log(string)
  if(left == 0 && right == 0){
    res.push(string)
    return
  }
  if(left>0){
    dfs(res,left-1,right,string+'(')
  }
  if(right>0){
    dfs(res,left,right-1,string+')')
  }
}
//console.log(generateParenthesis2(3))
