const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

const n = +input[0];
const arr = input.slice(1, n+1).map(Number);
const v = +input[n+1];

const ans = arr.reduce((cnt, elem) => cnt + (v === elem), 0);
console.log(ans);