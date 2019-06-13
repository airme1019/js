var reverseVowels = function(s) {
  if(s.length == 0 || s.length == 1) return s

    let sta = s.split('')
    let l = 0, r = sta.length - 1
    let vowels = 'aeiou'
    while ( l < r ) {
      if (vowels.includes(sta[l]) && vowels.includes(sta[r])){
        let temp = sta[l]
        sta[l] = sta[r]
        sta[r] = temp
        l++
        r--
      } else if(vowels.includes(sta[l]) && !vowels.includes(sta[r])){
        r--
      } else if(!vowels.includes(sta[l]) && vowels.includes(sta[r])){
        l++
      } else{
        l++
        r--
      }
    }
    return sta.join('')
};
const s = "k"
console.log(reverseVowels(s))
