function reverse(s) {
  let l = 0
  let r = s.length-1
  while(l<r){
    let temp = s[l]
    s[l] = s[r]
    s[r] = temp
    l++
    r--
  }

  return s;
}

/* input string */
function reverse2(s){
  return s === '' ? '' : reverse2(s.substr(1) )+ s.charAt(0);
}
console.log(reverse(['a', 'p', 'p','l','e']));
