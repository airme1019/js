var isValid = function(str){
    var sArr = str.split('');
    var close = [];
    for(var i =0; i<sArr.length; i++){
      if(sArr[i] == '{'){
          close.push('}');
         }else if(sArr[i] == '['){
           close.push(']');
         }else if(sArr[i] == '('){
           close.push(')');
         }else{
           if(sArr[i] !== close.pop()){
             return false;
           }
         }
    }
    return close.length >0 ? false : true
};
// console.log(isValid('{[()()]}'));
