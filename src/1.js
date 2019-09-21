var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...

  return function() {
    return apiCode;
  };
})();

//console.log(getCode());    // Returns the apiCode

function add(a, b , callback){
setTimeout(function(){
  console.log(`The sum of ${a} and ${b} is ${a+b}.` )
},2000);
callback();
}

// add() function is called with arguments given below
/*add(5,6,function disp(){
console.log('This must be printed after addition.');
});*/

var reverseString = function(s) {

    if (s.length == 0) {
        return;
    }
    var temp = s.shift();
    reverseString(s);
    s.push(temp);

    return s
};
var t = reverseString(["a","b","c","d","e"])
console.log(t)
