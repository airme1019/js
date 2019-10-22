var removeInvalidParentheses1 = function(s) {
    let arr = s.split('')
    let close = []
    for(let i = 0; i < arr.length; i += 1){
      let p = arr[i]

      if ( p == '('){
        close.push([i, ')'])
      } else {
        if (!p.match(/[a-z]/i)){
          console.log('not char')
          let pop = close.pop()
          console.log(pop)
          if(pop == undefined || (pop !== undefined && p !== pop[1])) arr[i] = ''
        }
      }
    }
    console.log(arr)
    if(close.length > 0){
      close.forEach( item => {
        arr[item[0]] = ''
      })
    }
    return arr.join('')
};
const s = "()())()"
//console.log(removeInvalidParentheses1(s))



function isValid(s) {
    var count = 0;

    for(var i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            count++;
        } else if(s[i] === ')') {
            count--;
        }

        if(count < 0) {
            return false;
        }
    }

    return count === 0;
}

var removeInvalidParentheses2 = function(s) {
    var queue = [];
    queue.push(s);
    var visited = {};
    var res = [];
    var found = false;


    // breadth first search since we are looking for the minimum changes
    while(queue.length > 0) {
        s = queue.shift();

        // things stored in the queue represent the same level (same number of changes)
        // once we found a valid one, we should not look further into the next level (by setting found to true)
        if(isValid(s)) {
            res.push(s);
            found = true;
        }

        if(found) {
            continue;
        }

        // if nothing found, then loop through the entire string and remove one of the parenthesis.
        for(var i = 0; i < s.length; i++) {
            if(s[i] !== '(' && s[i] !== ')') {
                continue;
            }

            var newS = s.substring(0,i) + s.substring(i + 1);

            if(!visited[newS]) {
                visited[newS] = true;
                queue.push(newS);
            }
        }
    }

    return res;
};
//console.log(removeInvalidParentheses2(s))

var removeInvalidParentheses3 = function(s) {
    let output = [];

    const removeHelper = (s, iStart, jStart, openParan, closedParan) => {
        let numOpenParan = 0, numClosedParan = 0;

        for(let i=iStart;i<s.length;i++){
            if(s[i] == openParan) numOpenParan++;
            if(s[i] == closedParan) numClosedParan++;

            if(numClosedParan > numOpenParan) {
                for(let j=jStart;j<=i;j++)
                    if(s[j] == closedParan && (j==jStart || s[j-1] != closedParan))
                        removeHelper(s.substring(0, j)+s.substring(j+1, s.length), i, j, openParan, closedParan)

                return;
            }
        }
        let reversed = s.split("").reverse().join("");
        if(openParan == "(") removeHelper(reversed, 0, 0, ")", "(");
        else output.push(reversed);
    }

    removeHelper(s, 0, 0, "(", ")")
    return output;
};


var removeInvalidParentheses4 = function(s) {
	var res = [], max = 0;
	dfs(s, "", 0, 0);
	return res.length !== 0 ? res : [""];

	function dfs(str, subRes, countLeft, maxLeft){
    console.log('str '+str+' subRes '+subRes + ' countLeft' +countLeft + ' maxLeft '+maxLeft)
		if(str === ""){
			if(countLeft === 0 && subRes !== ""){
				if(maxLeft > max)
					max = maxLeft;
				if(max === maxLeft && res.indexOf(subRes) === -1){
          console.log('push max'+max)
					res.push(subRes);
        }
			}
			return;
		}
		if(str[0] === '('){
			dfs(str.substring(1), subRes + '(', countLeft + 1, maxLeft + 1);
			dfs(str.substring(1), subRes, countLeft, maxLeft);
		} else if(str[0] === ')'){
			if(countLeft > 0)
				dfs(str.substring(1), subRes + ')', countLeft - 1, maxLeft);
			dfs(str.substring(1), subRes, countLeft, maxLeft);
		}else{
			dfs(str.substring(1), subRes + str[0], countLeft, maxLeft);
		}
	}
};
console.log(removeInvalidParentheses4(s))
