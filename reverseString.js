function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {
console.log(i);
   }
  return o;
}

function reverse2(s){
  return s === '' ? '' : reverse2(s.substr(1) )+ s.charAt(0);
}
console.log(reverse2('apple'));
