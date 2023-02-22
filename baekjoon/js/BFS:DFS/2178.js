const bfs = (x, y) => {
  const que = [[x, y]];
  
  while(que.length){
    const [x, y] = que.shift();
    for(let i=0; i<4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];

      if(0 <= nx && nx < N && 0 <= ny && ny < M && graph[nx][ny] === 1) {
        que.push([nx, ny]);
        graph[nx][ny] = graph[x][y]+1;
      }
    }
  }
  return graph[N-1][M-1];
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = T.split(' ').map(e=>+e);
const graph = input.map((elem) => elem.split('').map(e=>+e));

//up, down, left, right
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1]
console.log(bfs(0,0));