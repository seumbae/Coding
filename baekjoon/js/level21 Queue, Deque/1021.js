const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const loc = input[0].split(' ').map(Number);

const que = new Array(N).fill(0).map((val, idx)=> idx+1);
let ans = 0;
while(loc.length !== 0){
  if(loc[0] === que[0]){
    que.shift();
    loc.shift();
  }
  const sec = que.indexOf(loc[0]);
  const third = que.length - que.indexOf(loc[0]);
  if(sec < third){
    //2번 연산 
    for(let i=0; i<sec; i++){
      que.push(que.shift());
      ans++;
    }
  }
  else{
    //3번 연산
    for(let i=0; i<third; i++){
      que.splice(0,0, que.pop());
      ans++;
    }
  }
}

console.log(ans);