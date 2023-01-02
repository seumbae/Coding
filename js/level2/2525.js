const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [hour, min, time] = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

console.log((hour + parseInt((min+time)/60))%24, (min+time)%60);