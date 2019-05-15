/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations2 = function(digits) {
    const letters = {
      '2': ['a','b','c'],
      '3': ['d','e','f'],
      '4': ['g','h','i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r','s'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y','z'],
    }
    let res = []
       let comb = ''
      for(let c of letters[digits.charAt(0)]){
        comb += c
      }
 };

 var letterCombinations = function(digits) {
    if(!digits||digits.length==0) return [];

    var arr=[,,['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    var result=[];
    for(var i=0;i<digits.length;i++){
        if(result.length==0){
            result=arr[+digits[i]];
        }else{
            result=map(result,arr[+digits[i]]);
        }
        console.log(result)
    }
    return result;
};

function map(res,arr){
  let tmp = []
  for(let r of res){
    for(let a of arr){
      tmp.push(r+a)
    }
  }
  return tmp
}
function map2 (result,arr) {
    var tmp=[];
    arr.forEach(function(e){
        tmp=tmp.concat(result.map(function(item){
            return item+e;
        }));
    });
    return tmp;
}
const d = '235'
console.log(letterCombinations(d))
//console.log(map2(['a','b','c'], ['d','e']))
