const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let flag = true;
let ans = 0;
for(let i=0; i<input.length; i++){
  let num = '';
  while(i<input.length && input[i] !== '+' && input[i] !== '-'){
    num += input[i++];
  }
  if(flag)
    ans += parseInt(num);
  else
    ans -= parseInt(num);
  
  if(input[i] === '-')
  flag = false;
  }
console.log(ans)