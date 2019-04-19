var reverseString = function (str) {
  let l = 0;
  let r = str.length - 1;
  let arr = str.split('');
  while (l < r) {
    if (!/[a-zA-Z]/.test( arr[l])){
      console.log(l);
      l++;
    } else if (!/[a-zA-Z]/.test( arr[r])) {
      r--;
    } else{
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }
  return arr.join('');
}

var str1 = 'ab&*cd';
var test = reverseString(str1);
console.log(test)

/*
if (!/[a-zA-Z]/.test( arr[l])){
  console.log(l);
  l++;
} else if (!/[a-zA-Z]/.test( arr[r])) {
  r--;
} else{
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}

*/
