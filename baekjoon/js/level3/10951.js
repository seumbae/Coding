const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.forEach((item) => {
  const [a, b] = item.split(' ');
  console.log(Number(a) + Number(b));
})