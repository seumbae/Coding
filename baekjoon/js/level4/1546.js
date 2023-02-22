const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let list = input[1].split(' ').map(Number);
const max = Math.max(...list);
let sum = 0;
list.map((elem) => {
   sum += elem / max * 100 / Number(input[0]); 
})

console.log(sum);

