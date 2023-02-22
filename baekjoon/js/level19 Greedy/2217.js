const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

let weight = input.slice(1).map(Number).sort((a, b) => b-a);
let ans = weight[0];

for(let i=0; i<weight.length; i++){
  let target = weight[i] * (i+1);
  if(ans < target)
    ans = target
  }
console.log(ans)