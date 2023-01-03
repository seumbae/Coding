const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

let ans = 0;
let num = input;
do{
  const a = parseInt(num/10), b = num%10;
  num = b*10 + (a+b)%10;

  ans++;
}while(num !== input);
console.log(ans);
