var removeDuplicateLetters = function(s) {
  const m = new Array(26);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i) - a;
    m[k] = m[k] ? m[k]+1 : 1;
  }
  const sol = [];
  const visited = new Array(26);
  for (let i = 0; i < s.length; i++) {
    const k = s.charCodeAt(i) - a;
    console.log(k)
    m[k] = m[k] - 1;
    if (visited[k])
      continue;
    while(sol.length > 0) {
      const last = sol[sol.length-1]-a;
      console.log('last: ' +last)
      if (last > k && m[last] > 0) {
        visited[last] = false;
        sol.pop();
      } else
        break;
    }
    visited[k] = true;
    sol.push(k+a);
    //console.log(i,sol,m);
  }
  return String.fromCharCode(...sol);
}
const s = "bcabc"
const s2 = "cbacdcbc"
//console.log(removeDuplicateLetters(s2))

var removeDuplicateLetters1 = function(s) {
  let occ = {}
  for(let i = 0; i < s.length; i += 1) {
    occ[s.charAt(i)] = occ[s.charAt(i)] ? occ[s.charAt(i)] + 1 : 1
  }
  console.log(occ)
  let visited = {}
  let res = []
  for(let i = 0; i < s.length; i += 1) {
    occ[s.charAt(i)] -= 1
    if (visited[s.charAt(i)]) continue

    while(res.length > 0) {
      // last character > current character and there is more last character after current character
      if(s.charAt(i) < res[res.length-1] && occ[res[res.length-1]] > 0){
        visited[res[res.length-1]] = false
        res.pop()
      } else break
    }
    visited[s.charAt(i)] = true
    res.push(s.charAt(i))
  }
  return res
}
console.log(removeDuplicateLetters1('cbacdcbc'))
