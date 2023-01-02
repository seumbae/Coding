const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(Number);
console.log(input[0] / input[1]);