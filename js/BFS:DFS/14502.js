const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(e=>+e);
let graph = input.map((elem) => elem.split(' ').map(e=>+e));
const virus = [];
const space = [];
const ans = [];
graph.forEach((elem, x) => elem.forEach((e, y) => {
  if(e === 2) virus.push([x, y]);
  if(e === 0) space.push([x, y]);
}));
const way = [[-1,0], [1,0], [0,-1], [0,1]];


for(let i=0; i<space.length; i++){
  for(let j=i+1; j<space.length; j++){
    for(let k=j+1; k<space.length; k++){
      let [x1, y1] = space[i];
      let [x2, y2] = space[j];
      let [x3, y3] = space[k];

      let board = JSON.parse(JSON.stringify(graph));
      board[x1][y1] = 1;
      board[x2][y2] = 1;
      board[x3][y3] = 1;

      let que = JSON.parse(JSON.stringify(virus));
      while(que.length){
        const [x, y] = que.shift();
        for(item of way){
          const nx = x + item[0];
          const ny = y + item[1];

          if(nx<0 || N <= nx || ny<0 || M <= ny || board[nx][ny] === 1 || board[nx][ny] === 2) continue;
          board[nx][ny] = 2;
          que.push([nx,ny]);
        }
      }
      const safe = board.reduce((acc, curr) => acc + curr.filter(e => e === 0).length,0);
      ans.push(safe);
    }
  }
}
console.log(Math.max(...ans));