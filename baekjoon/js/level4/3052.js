const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const set = new Set(input.map((elem) => elem%42));
const ans = [...set];
console.log(ans.length);