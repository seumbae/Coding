const split = (str) => {
  const words = [];
  
  for(let i=0; i<str.length-1; i++){
      const substr = str.substring(i, i+2);
      if('a' <= substr[0] && substr[0] <= 'z' && 'a' <= substr[1] && substr[1] <= 'z')
          words.push(substr);
  }
  return words
}

function solution(str1, str2) {
var ans = 0;

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

const setA = split(str1).sort();
const setB = split(str2).sort();

if(setA.length === 0 && setB.length === 0) return 65536

const intersection = [];
const union = [];

for(let i=0; i<setA.length; i++){
  const idx = setB.indexOf(setA[i]);
  
  if(0 <= idx) intersection.push(setB.splice(idx, 1));
  union.push(setA[i]);
}

return Math.floor(intersection.length / (union.length+setB.length) * 65536);
}