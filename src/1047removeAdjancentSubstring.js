/*var removeDuplicates = function(S) {
  if(S.length <= 1) return S
    let a = S.split('')
    console.log(a)
    let res = a.reduce((acc,cur,index) => {
     if(index == 0 ){
      if( cur.charCodeAt(0) - a[1].charCodeAt(0)!== 1 &&
      cur.charCodeAt(0) - a[1].charCodeAt(0) !== 0 &&
      cur.charCodeAt(0) - a[1].charCodeAt(0) !== -1
    ){ acc.push(cur)}
  } else {
      if(cur.charCodeAt(0) - a[index-1].charCodeAt(0)== 1 ||
      cur.charCodeAt(0) - a[index-1].charCodeAt(0)== 0 ||
      cur.charCodeAt(0) - a[index-1].charCodeAt(0)== -1
    ){
        console.log('adj'+cur)
      } else{
        acc.push(cur)
      }
    }
    return acc
    },[])
    return res.join('')
};*/
var removeDuplicates = function(S) {
    let a = S.split('')
    return a.reduce((acc,cur,index)=> {
      if(cur !== acc[acc.length-1]){
        acc.push(cur)
        console.log(acc)
      } else {
        acc.pop()
      }
      return acc
    }, ['']).join('')
};
const s = 'abaabacf'
console.log(removeDuplicates(s))
