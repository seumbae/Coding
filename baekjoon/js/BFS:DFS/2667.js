const bfs = (x,y, danji) => {
  const que = [[x,y]];
  visited[x][y] = true;
  let cnt = 1;
  while(que.length){
    const [x, y] = que.shift();
    graph[x][y] = danji;
    for(let i=0; i<4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];
      
      if(0<=nx && nx<N && 0<=ny && ny<N && graph[nx][ny] === 1 && visited[nx][ny] === false){
        que.push([nx, ny]);
        visited[nx][ny] = true;
        cnt++;
        }
      }
  }
  return cnt;
}

const dfs = (x, y) => {
  if(x < 0 || N <= x || y < 0 || N <= y)
    return false;
  
  if(graph[x][y] === 1 && visited[x][y] === false){
    cnt++;
    visited[x][y] = true;
    graph[x][y] = danji;
    for(let i=0; i<4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];
      dfs(nx, ny);
    }
    return true;
  }
  return false;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const graph = input.slice(1).map((elem) => elem.split('').map(e=>+e));
const visited = [...new Array(N)].map(() => []);
  for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
      visited[i].push(false);
    }
  }
// 상, 하, 좌, 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let danji = 1;
let ans = [];
// BFS
// for(let i=0; i<N; i++){
//   for(let j=0; j<N; j++){
//     if(graph[i][j] === 1 && visited[i][j] === false){
//       ans.push(bfs(i, j, ++danji));
//     }
//   }
// }

// DFS
// let cnt = 0;
// for(let i=0; i<N; i++){
//   for(let j=0; j<N; j++){
//     if(graph[i][j] === 1 && visited[i][j] === false){
//       if(dfs(i,j) === true){
//         danji++;
//         ans.push(cnt);
//         cnt = 0;
//       };
//     }
//   }
// }

//BFS
// console.log(`${danji}\n${ans.sort((a, b) => a-b).join('\n')}`);

// DFS
// console.log(`${danji-1}\n${ans.sort((a, b) => a-b).join('\n')}`);