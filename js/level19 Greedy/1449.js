const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, L] = input[0].split(' ').map(e=>+e);
const pos = input[1].split(' ').map(e=>+e).sort((a, b) => a-b);

let ans = 0;
let idx = 0;
do{
  idx = pos.findIndex((elem) => pos[idx] + L -1 < elem);
  ans++;
}while(idx != -1);

console.log(ans);