/*
https://leetcode.com/problems/add-digits/
258
*/

var addDigits = function(num){
  return num.toString().split('').reduce((acc,val) => Number.parseInt(acc)+Number.parseInt(val),0);
}

var addDigits2 = function(num){
  while(num > 10) {
    num = parseInt(num/10) + num%10;
    // console.log(num);
  }
  return num;
}
// console.log(addDigits2(4321));
