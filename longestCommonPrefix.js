var longestCommonPrefix = function(strs) {
    if(strs.length==0) return '';
   // var sorted_strs = strs.sort(function(a,b){ return a.length -b.length});
  var sorted_strs = strs.sort();
  console.log(sorted_strs);
    var shortest = sorted_strs[0].split('');
    var longest = sorted_strs[sorted_strs.length -1].split('');  
    var pre ='';
  
    for(var i = 0; i<shortest.length;i++){  
      if(shortest[i] == longest[i]){ 
        pre += shortest[i]; 
      }else{break;}
    }
  return pre;  
};

console.log(longestCommonPrefix(["aaaaaaaaaaa","aaaaaaaab","aaaaaaaaa"]) );     
console.log(longestCommonPrefix(["aba","abc","ababa"]) );   
