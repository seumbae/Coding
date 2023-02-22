const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
let Aarr = input[1].split(' ').map(Number).sort((a, b) => a-b);
let Barr = input[2].split(' ').map(Number).sort((a, b) => b-a);

let ans = 0;
for(let i=0; i<N; i++){
  ans += Aarr[i] * Barr[i];
}

console.log(ans);