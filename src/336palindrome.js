var palindromePairs = function(words) {
  let res = []
  for ( let i = 0; i < words.length; i += 1) {
    for( let j = i +1; j < words.length; j++){
      //if(words[i].charAt(0) !== words[j].charAt(words[j].length - 1)) continue
      if (palindrome(words[i]+words[j])) res.push([i,j])
      if (palindrome(words[j]+words[i])) res.push([j,i])

    }
  }
  return res
};
var palindrome = function (s){
  let left = 0
  let right = s.length - 1
  while( left < right){
    if(s.charAt(left) !== s.charAt(right))return false
    left++
    right--
  }
  return true
}
//console.log(palindromePairs(w))
//console.log(palindrome('abcba'))
var isPalindrome = function(str) {
    let i=0;
    let j=str.length - 1;
    while(i<j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
var palindromePairs2 = function(words) {
    if(!words) return [];
    let result = [];
    let reverseMap = new Map();
    words.forEach((word, i) => {
        let r = word.split('').reverse().join('');
        reverseMap.set(r, i);
        if(isPalindrome(word)){
           result.push([i])
        }
    });

    for(let i = 0; i < words.length; i++) {
        const word = words[i];

            for(let j = 0; j < word.length; j++) {
                const left = word.substr(0, j);
                const right = word.substr(j);

                if (isPalindrome(left) && reverseMap.has(right) && reverseMap.get(right) != i) {
                    result.push([reverseMap.get(right), i]);
                }
                if(isPalindrome(right) && reverseMap.has(left) && reverseMap.get(left) != i) {
                    result.push([i, reverseMap.get(left)]);
                }
            }
    }
    return result;
};
//const w = ["abcd","dcba","lls","s","sssll","abba"]
const w =['abac',"ada",'c']

console.log(palindromePairs2(w))
