const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

arr.forEach((item) => {
  const [a, b] = item.split(' ').map(Number);
  console.log(a+b);
})

