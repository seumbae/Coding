const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

input.forEach((elem) => {
  const [n, str] = elem.split(' ');
  let ans = '';
  for(let i=0; i<str.length; i++){
    ans += str[i].repeat(Number(n));
  }
  console.log(ans);
})