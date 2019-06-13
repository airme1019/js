var beautifulArray = function(N) {
    let arr=Array.from({length:N}, (x,i)=>i+1);
    console.log(arr)
    return helper(arr);

    function helper(arr){
    	if(arr.length===1) return arr;
    	let o=[], e=[]; //odd index and even index
    	for(let i=0; i<arr.length; i++){
    		if(i%2===0) e.push(arr[i]);
    		else o.push(arr[i]);
    	}
      console.log('e: '+helper(e))
    	return helper(e).concat(helper(o));
    }
};
console.log(beautifulArray(5))
