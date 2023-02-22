const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const deque = [];
let [head, tail]= [0,0]
let ans = '';
/*
input.forEach((elem) => {
  const [cmd, data] = elem.split(' ');
  switch(cmd){
    case 'push_front':
      deque.splice(head,0, Number(data));
      tail++;
      break;
    case 'push_back':
      deque.splice(tail,0,Number(data));
      tail++;
      break;
    case 'pop_front':
      if(head === tail) ans += '-1\n';
      else ans += `${deque[head++]}\n`;
      break;
    case 'pop_back':
      if(head === tail) ans += '-1\n';
      else ans += `${deque[--tail]}\n`;
      break;
    case 'size':
      ans += `${tail-head}\n`;
      break;
    case 'empty':
      ans += `${tail === head ? 1 : 0}\n`;
      break;
    case 'front':
      if(head === tail) ans += '-1\n';
      else ans += `${deque[head]}\n`;
      break;
    case 'back':
      if(head === tail) ans += '-1\n';
      else ans += `${deque[tail-1]}\n`;
      break;
  }
})
*/
input.forEach((elem) => {
  const [cmd, data] = elem.split(' ');
  switch(cmd){
    case 'push_front':
      deque.splice(0,0, Number(data));
      break;
    case 'push_back':
      deque.push(Number(data));
      break;
    case 'pop_front':
      ans += `${deque.shift() || -1}\n`;
      break;
    case 'pop_back':
      ans += `${deque.pop() || -1}\n`;
      break;
    case 'size':
      ans += `${deque.length}\n`;
      break;
    case 'empty':
      ans += `${deque.length === 0 ? 1 : 0}\n`;
      break;
    case 'front':
      if(deque[0]) ans += `${deque[0]}\n`;
      else ans += `-1\n`;
      break;
    case 'back':
      if(deque[0]) ans += `${deque[deque.length-1]}\n`;
      else ans += `-1\n`;
      break;
  }
})
console.log(ans);