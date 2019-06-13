/*Given a List of words, return the words that can be
typed using letters of alphabet on only one row's of
American keyboard like the image below.

*/

const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

var findWords = function(words) {
  const verifiedWords = [];

  const brokenWords = words.map(word => word.split('').map(letter => letter.toUpperCase()));
  brokenWords.map(word => {
   	if (word.every(letter => row1.includes(letter))) {
      verifiedWords.push(word.join(''));
    	return true;
    } else if (word.every(letter => row2.includes(letter))) {
      verifiedWords.push(word.join(''));
     	return true;
    } else if (word.every(letter => row3.includes(letter))) {
      verifiedWords.push(word.join(''));
      return true;
    }
  });

  return verifiedWords
}
const words = ["Hello", "Alaska", "Dad", "Peace"]
console.log(findWords(words))
