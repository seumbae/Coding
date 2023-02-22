const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();
const hrAlpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let ans = 0;
input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|[a-z]/g,(match) => ans++);
console.log(ans)