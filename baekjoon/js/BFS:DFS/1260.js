const dfs = (v) => {
  dfsVisited[v] = true;
  
  dfsAns.push(v);
  graph[v].forEach((node) => {
    if(!dfsVisited[node]){
      dfs(node);
    }
  })
}

const bfs = (v) => {
  const que = [v];
  bfsVisited[v] = true;

  while(que.length){
    const node = que.shift();
    bfsAns.push(node);
    graph[node].forEach((elem) => {
      if(!bfsVisited[elem]){
        que.push(elem);
        bfsVisited[elem] = true;
      }
    })
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N,M,V] = T.split(' ').map(e=>+e);
const graph = [...new Array(N+1)].map(() => []);
input.forEach((elem) => {
  const [from, to] = elem.split(' ').map(e=>+e);
  graph[from].push(to);
  graph[to].push(from);
})
let dfsVisited = new Array(N).fill(false);
let dfsAns = [];
let bfsVisited = new Array(N).fill(false);
let bfsAns = [];
graph.forEach((elem) => elem.sort((a, b) => a-b));
dfs(V);
bfs(V);
console.log(`${dfsAns.join(' ')}\n${bfsAns.join(' ')}`);