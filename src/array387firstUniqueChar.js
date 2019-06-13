var firstUniqChar = function(s) {
    let charObj = {}
    let sArr = s.split('')
    for ( let i = 0; i < sArr.length; i += 1) {
      let c = sArr[i]
      if ( ! s.substring(i+1).includes(c) && charObj[c]!== 1) return i
      charObj[c] = 1
    }
    return -1
};
let s = 'aapp'
console.log(firstUniqChar(s))
