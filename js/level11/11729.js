const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let N = +fs.readFileSync(filePath).toString().trim();

let ans = [0];
const Hanoi = (plate, from, to, other) => {
  ans[0]++;
  if(plate === 1){
    ans.push(`${from} ${to}`);
    return ;
  }
  Hanoi(plate -1, from, other, to);
  ans.push(`${from} ${to}`);
  Hanoi(plate -1, other, to, from);
}
Hanoi(N, 1, 3, 2);
console.log(ans.join('\n'));