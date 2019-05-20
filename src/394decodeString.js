/* Recurision */
var decodeString1 = function(s) {
    let res = '';
    let k = 1, i = 0;
    while (i < s.length) {
        if (Number.isInteger(+s[i])) {
            let len = 1;
            while (Number.isInteger(+s[i + len])) len++;
            k = parseInt(s.substr(i, len));
            i += len;
        } else if (s[i] === '[') {
            let paren = 1;
            let j = i + 1;
            while (paren) {
                paren += (s[j] === '[') - (s[j] === ']');
                console.log(paren)
                j++;
            }

            res += decodeString(s.substring(i + 1, j - 1)).repeat(k);
            k = 1;
            i = j;
        } else {
            res += s[i].repeat(k);
            k = 1;
            i++;
        }
    }
     return res;
};

const s1 = "3[a]2[bc]" //return "aaabcbc"
const s2 = "3[a2[c]]" //return "accaccacc"
const s3 = "2[abc]3[cd]ef"//return "abcabccdcdcdef"

console.log(decodeString(s1))

/* No recurision with stack */
var decodeString1 = function(s) {
    var stack = [];
    var i=0;
    var j=0;
    for(; i<s.length; i++) {
        var buf = [];
        var seq;
        var freq = 0;
        var c = s.charAt(i);
        if (c===']') {
            for(j = stack.length-1; j>=0; j--) {
                var p = stack.pop();
                if (p === '[') {
                    seq = buf.join('');
                    buf = [];
                    for(var k=j-1; k>=0 && stack[k]>='0' && stack[k]<='9'; k--) {
                        buf.unshift(stack.pop());
                    }
                    freq=parseInt(buf.join(''));
                    stack.push(Array(freq+1).join(seq));
                    buf = [];
                    break;
                }
                else {
                    buf.unshift(p);
                }
            }
        }
        else {
            stack.push(c);
        }
    }
    return stack.join('');
};
