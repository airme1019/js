/*fractail using recurisive */
function frac(n){
   return n>1 ? n * frac(n-1) : 1;
   
 }

console.log(frac(3));
