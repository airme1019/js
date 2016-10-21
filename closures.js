
function test(){
  var a = 6;
 return function b(){
    console.log(a);  
  }
  
}

var ii= test();
ii();
 
/*self invoke function  --- IIFE */
 var i = (function () {
    var counter = 0;
   
      return function () {
        return counter += 1;}
 
  
    
})();
console.log(i());
 
var add = (function () {
    var counter = 0;
    return function () {
      return counter += 1;}
})();

add();
add();
console.log(add());
