var isValid = function(s){
    var s_arr = s.split('');
    var ori_l = s_arr.length;
    var close = [];
    for(var i =0; i<ori_l; i++){
      if(s_arr[i] == '{'){
          close.push('}');         
         }else if(s_arr[i] == '['){
           close.push(']');
         }else if(s_arr[i] == '('){
           close.push(')');
         }else{
           if(s_arr[i] !== close.pop()){
             return false;
           }
         }
    }
      if(close.length >0){
        return false;             
    }else{ return true;}  
  
};
// console.log(isValid('{[())]}'));
