const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let N = +fs.readFileSync(filePath).toString().trim();

//첫번째와 두번째 각각 0, 1이 주어져야함
const fibonacci = (input) =>{
  if(input === 0) return 0;
  if(input === 1) return 1;
  
  return fibonacci(input-1) + fibonacci(input-2);
}

console.log(fibonacci(N));