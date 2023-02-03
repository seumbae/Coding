const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testCase, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = testCase.split(' ').map(e=>+e);
const map = new Map(input.slice(0,N).map((val, idx) => [idx, val]));
const problem = input.slice(N);
let ans = '';

problem.map(elem => {
  if(isNaN(parseInt(elem))) {
    for(let [key, val] of map){ //TODO: 이 부분이 문제인듯함
      if(val === elem){
        ans += `${key+1}\n`
      }
    }
  }
  else ans += `${map.get(+elem-1)}\n`;
})
console.log(ans);