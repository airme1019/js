var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...

  return function() {
    return apiCode;
  };
})();

//console.log(getCode());    // Returns the apiCode

var test = function() {
  // 225000 // 0 1 2
  let t = 1
  while (t<11000){
    let r = 225 * t +''
    if([...r].every(c => '012'.includes(c))) {
      console.log(225*t)
     break
    }
    t++
  }
}
//console.log(digits_only('012'))
//console.log(test())
  const r = new Set([1,1,2,2,3])
  console.log([...r].length)
