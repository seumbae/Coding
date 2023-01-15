const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr =[]
input.forEach((elem) => {
  arr.push(elem.split(' ').map(Number));
})

let max = -1;
let rowIdx, colIdx;

arr.forEach((elem, idx) => {
  const tmpMax = Math.max(...elem);
  if(max < tmpMax){
    max = tmpMax;
    rowIdx = idx;
    colIdx = elem.indexOf(max);
  }
})

console.log(`${max}\n${rowIdx+1} ${colIdx+1}`);