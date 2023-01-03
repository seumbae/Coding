const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
  const [a,b] = input[i].split(' ');
  console.log(Number(a) + Number(b));
}