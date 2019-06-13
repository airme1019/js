var calculate = function(s) {
    let res = 0
    let sign = 1
    let n = 0
    let stack = []
    s = s.split('').filter(c => c !==' ').join('')
    console.log(s)
      for( let i = 0; i < s.length; i += 1) {
      let c = s.charAt(i)
      if(c >= '0' && c <= '9'){
            let num = c
            while(i+1 < s.length && s.charAt(i+1) >= '0' && s.charAt(i+1) <= '9'){
                num += s.charAt(i+1);
                i++;
            }
        n = parseInt(num)
//console.log('n '+n)
      } else if(c == '+'){
        res += sign * n;
            n = 0;
            sign = 1;
      } else if( c =='-'){
        res += sign*n
        sign = -1
        n = 0
         //console.log('res '+res)
      } else if( c == '('){
        stack.push(res)
        stack.push(sign)
        res = 0
        sign = 1
      } else if( c == ')'){
        res += sign*n
        n = 0
        res *= stack.pop()
        res +=stack.pop()
      } else{
        n = parseInt(c)
       }

    }
    //console.log('res '+res)
    //console.log(n)
    if(n != 0) {res += sign * n}
    return res
};

const s =" 2-1 + 2 "
console.log(calculate(s))
