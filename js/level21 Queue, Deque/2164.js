const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let N = +fs.readFileSync(filePath).toString().trim();

const queue = [];
let head = 0;
for(let i=1; i<=N; i++){
  queue.push(i);
}

while(queue.length !== head){
  head++;
  queue.push(queue[head++]);
}

console.log(queue[head-2]);
