const allSubString = function (str) {
  const res = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j <= str.length; j += 1) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};
const testAllSubString = allSubString('ABCD')
console.log(testAllSubString)


/* Given min length of substring*/
const allSubStringMinLength = function (str, min) {
  const res = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let j = str.length; j - i >= min; j -= 1) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};
const testAllSubStringMinLength = allSubStringMinLength('ABCD', 2)
console.log(testAllSubStringMinLength)
