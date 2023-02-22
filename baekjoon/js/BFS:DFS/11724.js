const dfs = (v) => {
  visited[v] = true;
  graph[v].forEach((elem) => {
    if(visited[elem] === false) dfs(elem);
  })
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(e=>+e);
let visited = new Array(N+1).fill(false);
const graph = [...new Array(N+1)].map(() => []);
input.forEach((elem) => {
  const [from, to] = elem.split(' ').map(e=>+e);

  graph[from].push(to);
  graph[to].push(from);
})

let ans = 0;
for(let i=1; i<=N; i++){
  if(visited[i] === true) continue;
  dfs(i);
  ans++;
}
console.log(ans);