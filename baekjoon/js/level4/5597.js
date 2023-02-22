const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

const arr = Array.from({length: 30}, (v, i) => i+1);

const ans = arr.map((elem) => input.includes(elem) ? null : console.log(elem));