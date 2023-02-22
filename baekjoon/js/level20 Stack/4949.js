const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];
input.forEach((elem) => {
  if(elem === '.') return;

  const stack = [];
  const len = elem.length;

  for(let i=0; i< len; i++){
    if(elem[i] ==='(' || elem[i] === '[')
      stack.push(elem[i]);
    else if(elem[i] === ')'){
      stack[stack.length-1] === '(' ? stack.pop() : stack.push(elem[i]);
    }
    else if(elem[i] === ']'){
      stack[stack.length-1] === '[' ? stack.pop() : stack.push(elem[i]);
    }
  }
  stack.length === 0 ? ans.push('yes') : ans.push('no');
})

console.log(ans.join('\n'));