const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const list = input[1].split('').map(Number);

console.log(list.reduce((prev, curr) => prev + curr, 0));
