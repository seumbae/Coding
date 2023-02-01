const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N,...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

input.forEach((elem) => {
  const item = elem.split('');
  const stack = [];
  for(let i=0; i<item.length; i++){
    if(item[i] === '(')
      stack.push('(');
    else{
      if(0 < stack.length){
          stack.pop();
      }
      else{
        stack.push(')'); break;
      }
    }
  }
  stack.length ? ans.push('NO') : ans.push('YES');
})
console.log(ans.join('\n'));