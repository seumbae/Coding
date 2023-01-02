const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [a, b] = input;

if(a > b)
  console.log('>')
if(a < b)
  console.log('<')
if(a === b)
  console.log('==')