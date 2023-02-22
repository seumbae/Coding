const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
input.forEach((elem, idx) => {
  input[idx] = Number(elem.split('').reverse().join(''));
})
console.log(Math.max(...input))