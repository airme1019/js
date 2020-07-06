
const wordPatternMatch = ( pattern,  str) => {
  // p is a or b in pattern abab/aabb, r is str cha
    const helper = (p, r) => {
        console.log("subset ", substrSet)
        if (p == pattern.length && r == str.length) return true;
        if (p == pattern.length || r == str.length) return false;
        let c = pattern.charAt(p);
        console.log("c is: "+c)
        for (let i = r; i < str.length; i++) {
            let t = str.substr(r, i - r + 1);
            if (patternMap[c] == t) {
              //match, so check next pattern with leftover substr starts from i+1
                if (helper(p + 1, i + 1)) return true;
            } else if (!patternMap[c]) {
                if (substrSet.has(t)) continue;
                patternMap[c] = t; // create it as pattern b c
                substrSet.add(t);

                if (helper(p + 1,i + 1)) return true;
                //if no match, remove it as a pattern
                patternMap[c] = null;
                substrSet.delete(t);
            }
        }
        return false;
    }

    let patternMap = {}
    let substrSet = new Set()
    return helper( 0, 0);
}

/*Given a pattern and a string str, find if strfollows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

Example 1:

Input: pattern = "abab", str = "redblueredblue"
Output: true
Example 2:

Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
Output: true
Example 3:

Input: pattern = "aabb", str = "xyzabcxzyabc"
Output: false
Notes:
You may assume both pattern and str contains only lowercase letters.*/

let pattern = "abab", str = "redblueredblue"
console.log(wordPatternMatch(pattern,str))
