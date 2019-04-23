const allSubString = function (str) {
  const res = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j <= str.length; j += 1) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};
const testAllSubString = allSubString('ABCD')
console.log(testAllSubString)


/* Given min length of substring*/
const allSubStringMinLength = function (str, min) {
  const res = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = str.length; j - i >= min; j -= 1) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};
const testAllSubStringMinLength = allSubStringMinLength('ABCD', 2)
console.log(testAllSubStringMinLength)

/* Given a string, print all possible palindromic partitions
https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/
*/
var allPalindrom = function (str) {
  var result = []
  var subStrings = {}
  for ( let i = 0; i < str.length; i += 1) {
    for ( let j = i + 1; j <= str.length; j += 1) {
      let subStr = str.slice(i, j)
      if (!result.includes(subStr) && isPalindrom(subStr)) result.push(subStr)
    }
  }
  return result
}

var isPalindrom = function (str) {
  var arr = str.split('')
  var left = 0
  var right = arr.length - 1
  while (left<right){
    if ( arr[left] != arr[right] ) return false
    left ++
    right --
  }
  return true
}
console.log(allPalindrom('aaa'))
