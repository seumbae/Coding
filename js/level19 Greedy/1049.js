const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(' ').map(Number);
let prices = input.map((elem) => elem.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);

let weights = [];
let pkg = Math.ceil(N/6);
for(let i=0; i<=pkg; i++){
  let pieces = N < i*6 ? N : i*6;
  for(let j=0; j<M; j++){
    weights.push((prices[0][0]*i) + (prices[j][1]*(N-pieces)));
  }
}
console.log(Math.min(...weights));