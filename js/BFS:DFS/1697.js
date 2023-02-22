const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, K] = require("fs").readFileSync(filePath).toString().trim().split(' ').map(e=>+e);

let visited = new Array(100001).fill(false);
const que = [[N, 0]];
visited[N] = true;

while(que.length){
  console.log(que)
  const [pos, time] = que.shift();
  if(pos === K){
    console.log(time);
    return 0;
  }

  for(next of [pos-1, pos+1, pos*2]){
    if(visited[next] === false && 0<= next && next <= 100000){
      que.push([next, time+1]);
      visited[next] = true;
    }
  }
}