/*test*/
function test(a){
  var a = 6;;
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
// console.log(i());

var add = (function () {
    var counter = 0;
    return function () {
      return counter += 1;}
})();

add();
add();
// console.log(add());

// make counter
var makeCounter = function(){
  var counter = 0;
  function change(val){
    counter += val;
  }
    return {
      inc: function(){
        change(1);
      },
      dec: function(){
        change(-1);
      },
      value: function(){
        return counter;
      }
    }
};

var c = makeCounter();
c.inc();
c.inc();
c.dec();
//console.log(c.value());
