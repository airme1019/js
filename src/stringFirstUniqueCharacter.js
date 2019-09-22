var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i ++) {
    let c = s.charAt(i)
    if(!s.substring(0,i).includes(c) && !s.substring(i+1).includes(c)) return c
  }
  return -1
}
console.log(firstUniqChar('abcbcd'))
