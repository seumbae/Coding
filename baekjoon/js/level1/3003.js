const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
const chess = [1, 1, 2, 2, 2, 8];
input.forEach((elem, idx) => {
  process.stdout.write(`${chess[idx] - elem} `);
})