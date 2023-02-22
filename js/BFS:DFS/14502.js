const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(e=>+e);
let graph = input.map((elem) => elem.split(' ').map(e=>+e));
let copyGraph = [...new Array(N)].map(() => []);
const virus = []
graph.map((elem, idx1) => elem.map((e, idx2) => {
  if(e === 2) virus.push([idx1, idx2]);
}));
//상하좌우
const way = [[-1,0], [1,0], [0,-1], [0,1]];
let max = 0;

const bfs = () => {
  let que = virus.slice();
  
  for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
      copyGraph[i][j] = graph[i][j];
    }
  }
  
  while(que.length){
    const [x, y] = que.shift();
    for(item of way){
      const nx = x + item[0];
      const ny = y + item[1];

      if(nx < 0 || N <= nx || ny < 0 || M <= ny) continue;
      if(copyGraph[nx][ny] === 1) continue;
      if(copyGraph[nx][ny] === 0){
        copyGraph[nx][ny] = 2;
        que.push([nx, ny]);
      }
    }
  }

  let zero=0;
  copyGraph.forEach((elem) => elem.forEach(e => e === 0 ? zero++ : null));
  return zero;
}

const wall = (x, y, cnt) => {
  if(cnt == 3){
    let ret = bfs();
    max = Math.max(max, ret);
  }
  else{
    for(let i=0; i<N; i++){
      for(let j=0; j<M; j++){
        if(graph[i][j] === 0){
          graph[x][y] = 1;
          wall(i,j, cnt+1);
          graph[x][y] = 0;
        }    
      }
    }
  }
}
for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    if(graph[i][j] === 0){
      graph[i][j] = 1;
      wall(i,j, 0);
      graph[i][j] = 0;
    }
  }
}
console.log(max);