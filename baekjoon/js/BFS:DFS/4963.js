const bfs = (x, y) => {
  visited[x][y] = true;
  let que = [[x,y]];

  while(que.length){
    const [x, y] = que.shift();
    for(item of ways){
      const nx = x + item[0];
      const ny = y + item[1];

      if(nx < 0 || H <= nx || ny < 0 || W <= ny || map[nx][ny] === 0|| visited[nx][ny] === true) continue;
      que.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
input.pop();

let W, H;
let map
let visited;
// 북 남 서 동 북동 남동 남서 북서
const ways = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, 1], [1, 1], [1, -1], [-1, -1]];
while(input.length){
  [W, H] = input.shift().split(' ').map(e=>+e);
  map = input.splice(0, H).map((e) => e.split(' ').map(v=>+v));
  visited = [...new Array(H)].map(e => Array(W).fill(false));

  let land = 0;
  for(let i=0; i<H; i++){
    for(let j=0; j<W; j++){
      if(map[i][j] === 1 && visited[i][j] === false){
        bfs(i, j);
        land++;
      }
    }
  }
  console.log(land);
}