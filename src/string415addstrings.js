var addStrings = function(num1, num2) {
    let a1 = num1.split('').map(i => i*1)
    let a2 = num2.split('').map(i => i*1)
    let carry = 0
    let res = []
    while ( a1.length > 0 || a2.length > 0 || carry == 1){
        let sum = carry
        if(a1.length > 0) sum += a1.pop()
        if(a2.length > 0) sum += a2.pop()
        carry = Math.floor(sum/10)
        res.unshift(sum%10)
    }
  return res.join('')
};
let num1 = '329', num2 = '5632'
console.log(addStrings(num1,num2))
