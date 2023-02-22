const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const max = Math.max(...input);
const idx = input.findIndex((elem) => elem === max) + 1;

console.log(max + '\n' + idx);