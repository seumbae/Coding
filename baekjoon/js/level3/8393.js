const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let sum = 0;
for(let i=1; i<=Number(input); i++){
  sum += i;
}

console.log(sum);