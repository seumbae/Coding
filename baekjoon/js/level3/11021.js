const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

arr.forEach((item, idx) => {
  const [a, b] = item.split(' ');
  console.log(`Case #${idx+1}: ${Number(a) + Number(b)}`)
})