const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n").map(Number);
// 반례: https://www.acmicpc.net/board/view/106796
input.sort((a, b) => a - b);

const zero = input.reduce((acc, curr) => acc + (curr === 0), 0);
const negative = input.filter((val) => val < 0);
const positive = input.filter((val) => 1 < val);
const ans = input.filter((val) => val === 1);

if(negative.length%2){
  if(!zero) ans.push(negative.pop());
}
//음수
for(let i=0; i<negative.length; i += 2){
  if(negative[i] && negative[i+1])
    ans.push(negative[i]*negative[i+1]);
}

if(positive.length%2){
  ans.push(positive.shift());
}

for(let i=0; i<positive.length; i+=2){
  if(positive[i] && positive[i+1])
    ans.push(positive[i] * positive[i+1]);
}
console.log(ans.reduce((acc, curr) => acc+curr, 0));