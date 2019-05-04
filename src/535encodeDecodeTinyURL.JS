/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    if(shortUrls[longUrl] !== undefined) return
    let random = ''
    let n = 9
    while(n>0){
      random += getRandomChar()
      n--
    }
    shortUrls[longUrl] = random
    longUrls[random] = longUrl
    console.log(longUrls[random])
    return 'http://tinyurl.com/' +random
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return longUrls[shortUrl]
};
var getRandomChar = () => {
  let letterAndNum = '0123456789abcdefghijklmnopqrstuvwxyz'
  return letterAndNum.charAt(Math.floor(Math.random() * 35));
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
let shortUrls = {}
let longUrls = {}
decode(encode('https://leetcode.com/problems/design-tinyurl2'))
console.log(shortUrls)
console.log(longUrls)
