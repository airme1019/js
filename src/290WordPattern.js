/*
https://leetcode.com/problems/word-pattern/
*/
var wordPattern = function(pattern, str) {
    let words = str.split(' ');

    if (words.length !== pattern.length) return false;

    const mapped = new Set();
    const hash = {};

    for (let i = 0; i < pattern.length; i++) {
        const currPattern = pattern[i];
        const currWord = words[i];
        if (!hash[currPattern] && !mapped.has(currWord)) {
            hash[currPattern] = currWord;
            mapped.add(currWord);
        } else if (hash[currPattern] !== currWord) {
            return false;
        }
    }
    return true;
};
