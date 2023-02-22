const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<Number(input[0]); i++){
  const [n, ...arr] = input[i+1].split(' ').map(Number);
  const avg = arr.reduce((prev, curr) => prev + curr,0) /n;
  const ans = arr.filter((elem) => elem > avg).length;
  console.log((ans/n*100).toFixed(3)+'%');
}