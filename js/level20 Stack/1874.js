const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const diff = new Array(...input);
let data;
let num = 1;

const ans = []
const stack = [];
const result = [];

while(input.length && num <=N){
  data = input.shift();

  while(num <= data){
    stack.push(num++);
    ans.push('+');
  }
  
  if(data === stack[stack.length-1]){
    result.push(stack.pop());
    ans.push('-');
  }
}

while(stack.length){
  result.push(stack.pop());
  ans.push('-');
}

diff.length === result.length && diff.every((val, idx) => val === result[idx]) ? console.log(ans.join('\n')) : console.log('NO');