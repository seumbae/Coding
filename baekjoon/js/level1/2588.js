const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 2; i >= 0; i--) {
  console.log(Number(input[0]) * Number(input[1][i]))
}
console.log(Number(input[0]) * Number(input[1]));