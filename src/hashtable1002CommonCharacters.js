/*
Input: ["hbella","label","roller"]
Output: ["e","l","l"]
*/
var commonChars = function(A) {
    let ans = A[0].split("");
    console.log(ans)
    for(let i=1; i< A.length; i++){
        ans = findCommon(ans, A[i].split(""));
        console.log(ans)
    }
    return ans;
};

var findCommon = function(a,b){
  return a.filter(v=>{
      let i = b.indexOf(v);
      if(i !== -1){
          b.splice(i, 1);
          return true
      }
      return false;
     })

}
const A = ["abella","labea","arollera"]
console.log(commonChars(A))
