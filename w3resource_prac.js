/* 41. Generate an array between two integers of 1 step length*/
function rangeBetween(a,b){
    var r = [];
    if(a<=b){
    for(var i = a; i<=b;i++){
        
        r.push(i);
    }
    }else{
        for(var i = b; i<=a;i++){
        
        r.push(i);
    }
        
    }
    
    return r;
}
console.log(rangeBetween(10,0));
