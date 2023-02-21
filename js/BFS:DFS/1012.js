const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();

//상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
for(let i=0; i<T; i++){
  const [M, N, K] = input.shift().split(' ').map(e=>+e);
  const cabbage = [...new Array(N)].map(() => Array(M).fill(0));
  const visited = [...new Array(N)].map(() => Array(M).fill(false));
  const pos = input.splice(0, K).map((elem) => elem.split(' ').map(e=>+e));
  pos.forEach((val) => {
    const [x, y] = val;
    cabbage[y][x] = 1;
  })

  let ans = 0;
  //bfs
  for(let j=0; j<N; j++){
    for(let k=0; k<M; k++){
      if(cabbage[j][k] === 1 && visited[j][k] === false){
        const que = [[j, k]];
        visited[j][k] = true;

        while(que.length){
          const [y, x] = que.shift();
          for(let i=0; i<4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(nx < 0 || M <= nx || ny < 0 || N <= ny) continue;
            if(cabbage[ny][nx] === 1 && visited[ny][nx] === false){
              que.push([ny, nx]);
              visited[ny][nx] = true;
            }
          }
        }
        ans++;
      }
    }
  }
  console.log(ans);
}