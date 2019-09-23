var strStr = function(haystack, needle) {
  if( needle.length == 0) return 0
  if(needle.length == haystack.length) return haystack == needle ? 0 : -1
  if(needle.length > haystack.length) return -1

  const endIndex = haystack.length - needle.length+1
  for(let i = 0; i < endIndex; i++) {

    if(haystack.charAt(i) == needle.charAt(0) &&
    haystack.substring(i, i+needle.length) == needle) {
      return i
    }
  }
  return -1
};
var strStr2 = function(haystack, needle) {
  return haystack.indexOf(needle)
}

console.log(strStr('hello','hello'))
