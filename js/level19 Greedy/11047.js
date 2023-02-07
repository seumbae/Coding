const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n');

let [N, K] = T.split(' ').map(Number);
input = input.map(e => +e).sort((a, b) => b-a);

let ans = 0;
for(let coin of input){
  if(K < coin) continue;
  ans += parseInt(K / coin);
  K %= coin;
}

console.log(ans);