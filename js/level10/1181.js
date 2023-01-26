const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

/**
 * Set 자료구조. 중복을 허락하지 않음
 */
const set = [...new Set(input)];

const compare = (a, b) => {
  if(a.length === b.length){
    return a < b ? -1 : 1;
  }
  else 
    return a.length - b.length;
}

const sorted = set.sort((a,b) => compare(a,b)).join('\n');
console.log(sorted);

