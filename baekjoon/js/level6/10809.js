const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let ans = new Array(26);

let val = 97;
for (let i = 0; i < 26; i++) {
  ans[i] = input.indexOf(String.fromCharCode(val));
  val++;
}

console.log(ans.join(' '));