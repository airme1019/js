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

var isValid2 = function(s) {
    const map = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };

    const result = [];

    for (let item of s) {
        if (item === '{' || item === '[' || item === '(') {
            result.push(item);
        } else if (map[item]) {
            if (result.pop() !== map[item]) {
                return false;
            }
        }
    }

    return result.length === 0;
};
 console.log(isValid2('{}{}{[(())]}'));
