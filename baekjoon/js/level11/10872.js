const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let N = +fs.readFileSync(filePath).toString().trim();

const factorial = (input) => {
  if(input === 0) return 1;
  return input * factorial(input - 1);
}

console.log(factorial(N));