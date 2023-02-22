const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testCase, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = testCase.split(' ').map(e=>+e);
const poketmon = input.slice(0, N);
const map = new Map(poketmon.map((val, idx) => [val, idx]));
const problem = input.slice(N);
let ans = '';

problem.map(elem => {
  if(isNaN(parseInt(elem))) {
    ans += `${map.get(elem)+1}\n`;
  }
  else ans += `${poketmon[+elem-1]}\n`
})
console.log(ans);