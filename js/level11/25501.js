const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let cnt;
const recursion = (word, left, right) => {
  cnt++;
  if(right <= left) return 1;
  
  if(word[left] !== word[right]) return 0;
  else return recursion(word, left+1, right-1);
}

const isPalindrome = (word) => {
  return recursion(word, 0, word.length-1);
}

input.forEach((elem) => {
  cnt = 0;
  console.log(isPalindrome(elem), cnt);
})
