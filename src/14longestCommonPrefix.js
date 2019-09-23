var longestCommonPrefix = function(strs) {
  if(strs.length==0) return '';
  let shortest = strs.reduce((shortest, str) => Math.min(shortest, str.length), Number.MAX_SAFE_INTEGER)
  var pre ='';
  for(let i = 0; i<shortest;i++){
    for( let j =0; j < strs.length; j++) {
      if(strs[j].charAt(i) !== strs[0][i]) {
        return pre
      }
    }
    pre += strs[0][i]
  }
  return pre
}

// console.log(longestCommonPrefix(["aaaaaaaaaaa","aaaaaaaab","aaaaaaaaa"]) );
  console.log(longestCommonPrefix(["aba","abc","ababa"]) );
