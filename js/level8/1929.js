const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [M, N] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const is_priems = (num) => {
  if(num === 1) return false;
  for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i === 0) return false;
  }
  return true;
}

for(let i=M; i<=N; i++){
  is_priems(i) ? console.log(i) : null;
}