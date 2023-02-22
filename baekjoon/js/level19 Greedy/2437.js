const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
input = input[0].split(' ').map(e=>+e).sort((a,b) => a-b)

let sum = 0;

for(let i=0; i<N; i++){
  if(sum+1 < input[i]) break;
  sum += input[i];
}
console.log(sum+1)