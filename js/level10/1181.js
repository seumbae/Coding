const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const compare = (a, b) => {
  if(a.length === b.length){
    if(a > b) return 1;
    if(a < b) return -1;
  }
  else 
    return a.length - b.length;
}

const sorted = input.sort((a,b) => compare(a,b)) 
let ans = '';
for(let i=0; i < sorted.length; i++){
  if(sorted[i] === sorted[i+1])
    continue;
  ans += `${sorted[i]}\n`
}
console.log(ans);

