var wordBreak1 = function(s, wordDict) {
    if (!wordDict || wordDict.length == 0) return false
    var dp = new Array(s.length + 1);
    dp.fill(false)
    dp[0] = true

    for(var i = 1; i <= s.length; i++) {

        for(var j = 0; j < i; j++) {
            if(dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true
                break;
            }
        }
    }
    return dp[s.length]
};
/* BFS slow
var wordBreak2 = function(s, wordDict) {
    if (wordDict.length === 0) return false;
    if (wordDict.length === 1) return s === wordDict[0];

    let queue = [''];
    let memo = new Map();

    while (queue.length > 0) {
      console.log('queue: ' + queue)
        const val = queue.shift();

        for (let word of wordDict) {
            const searchWord = `${val}${word}`;
            console.log(searchWord)
            const startsWith = s.indexOf(searchWord) === 0;

            if (searchWord === s) return true;
            else if (!memo.has(searchWord) && startsWith) {
                memo.set(searchWord, true);
                queue.push(searchWord);
            }
        }
    }

    return false;
};
*/
const searchWord = (start, s, wordDict, retArr, path) => {
    const n = s.length;
    if (start === n) {
        retArr.push(path.join(" "));
        return;
    }
    for (let i = start; i<n; i++) {
        const tempS = s.substring(start, i+1);
        const inDict = wordDict.includes(tempS);
        if (inDict) {
            searchWord(i+1, s, wordDict, retArr, [...path, tempS]);
        }
    }
}


var wordBreak2 = function(s, wordDict) {
    let retArr = [];
    if ( wordBreak1(s, wordDict) === false ) return retArr;
    let path = [];
    searchWord(0, s, wordDict, retArr, path);
    return retArr;
};

const s = "catsandog"
const wd = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak1(s,wd))
