const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim();

for(let i = 1; i <= input; i++) {
    const ans = '*'.repeat(i);
    console.log(ans);
}