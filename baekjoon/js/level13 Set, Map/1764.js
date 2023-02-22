const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testCase, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = testCase.split(' ').map(e=>+e);
const NArr = new Set(input.slice(0, N).sort((a, b) => a-b));
const MArr = new Set(input.slice(N).sort((a, b) => a-b));

let cnt = 0;
const ans = [];

MArr.forEach((val) => {
  if(NArr.has(val)){
    cnt++;
    ans.push(val);
  }
})

console.log(cnt+'\n'+ans.sort().join('\n'));