const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');
const ans = new Array(26).fill(0);
input.forEach((elem) => {
  ans[elem.toLowerCase().charCodeAt() - 97]++;
})
const max = Math.max(...ans)
if(ans.indexOf(max) !== ans.lastIndexOf(max))
  console.log('?');
else{
  console.log(String.fromCharCode(ans.indexOf(max)+65));
}