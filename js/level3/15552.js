const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = '';
arr.forEach((item) => {
  const [a,b] = item.split(' ');
  answer += Number(a) + Number(b) + '\n';
})
console.log(answer);

