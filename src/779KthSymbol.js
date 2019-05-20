var kthGrammar = function(N, K) {
  let res = [[0],[0,1]]
  if(N<2) return res[N][K]
  for (let i = 2;i <= N;i +=1){
    res[i] = res[i-1].map(item => item == 0 ? [0,1] : [1,0]).reduce((acc,cur) => acc.concat(cur))
  }
  return res[N-1][K-1]
};

console.log(kthGrammar(19,22))
