var smallestFactorization = function(a) {
    var f_arr = []; 
    if(a<10){f_arr.push(a); return parseInt(f_arr.sort().join(''));}
    for(var i= 9; i>1;i--){
      while(a%i == 0){         
        f = Math.floor(a/i);  
        f_arr.push(i); 
        a = a/i;          
        }       
    }  
  if(a>9){return 0;}
    return parseInt(f_arr.sort().join('')) > Math.pow(2,31) ? 0 : parseInt(f_arr.sort().join(''));
 };
 // console.log(smallestFactorization(387420489));     
