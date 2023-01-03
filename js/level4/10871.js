const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let ans = '';
arr.forEach((item) => {
  if(item < X)
    ans+=item+' ';
});
console.log(ans);
