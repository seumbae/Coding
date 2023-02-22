const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const queue = [];
let ans = '';
let [head, tail] = [0, 0];

input.forEach((elem) => {
  switch(elem){
    case 'pop':
      if(queue[head]) ans += `${queue[head++]}\n`;
      else ans += `-1\n`;
      break;
    case 'size':
      ans += `${tail - head}\n`;
      break;
    case 'empty':
      ans += `${tail === head ? 1 : 0}\n`;
      break;
    case 'front':
      if(tail !== head) ans += `${queue[head]}\n`
      else ans += `-1\n`;
      break;
    case 'back':
      if(tail !== head) ans += `${queue[tail-1]}\n`
      else ans += `-1\n`;
      break;
    default:
      queue[tail++] = Number(elem.split(' ')[1]);
  }
})
console.log(ans);