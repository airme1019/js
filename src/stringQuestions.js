/* Valid Anagram*/
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let sArr = s.split('').sort()
    let tArr = t.split('').sort()
    for( let i = 0; i < s.length; i++){
      if( sArr[i] != tArr[i]) return false
    }
    return true
};
var s= "anagrbm"
var t= "nagaram"
console.log(isAnagram(s,t))
