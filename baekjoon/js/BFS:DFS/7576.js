
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(' ').map(e=>+e);
let tomato = input.map((elem) => elem.split(' ').map(e=>+e));
let visited = [...new Array(N)].map((elem) => Array(M).fill(false));
let zero = tomato.map((elem) => elem.reduce((acc, curr) => acc+(curr===0), 0)).reduce((acc, curr)=> acc+curr, 0);
if(zero === 0){
  console.log(0);
  return 0;
}

//상하좌우
const nx = [-1, 1, 0, 0];
const ny = [0, 0, -1, 1];

let day = -1;
let que = [];
for(let i=0; i<N; i++){
  for(let j=0;j<M; j++){
    if(tomato[i][j] === 1){
      que.push([i,j]);
      visited[i][j] = true;
    }
  }
}
while(que.length){
  const tmp = que.slice();
  que = [];
  for(let i=0; i<tmp.length; i++){
    const [x, y] = tmp[i];
    for(let i=0; i<4; i++){
      const dx = x + nx[i];
      const dy = y + ny[i];
      if(dx < 0 || N <= dx || dy < 0 || M <= dy) continue;
      if(tomato[dx][dy] === 0 && visited[dx][dy] === false){
        visited[dx][dy] = true;
        tomato[dx][dy] = 1;
        que.push([dx,dy]);
        zero--;
      }
    }
  }
  day++;
}
zero === 0 ? console.log(day) : console.log(-1);