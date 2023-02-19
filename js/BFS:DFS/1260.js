const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

const dfs = (graph, node, visited) => {
  //TODO:
}

const bfs = (graph, node, visited) => {
  //TODO:
}
console.log(input)
const [N,M,V] = T.split(' ').map(e=>+e);
const graph = [...new Array(N+1)].map(() => []);
input.forEach((elem) => {
  const [from, to] = elem.split(' ').map(e=>+e);
  graph[from].push(to);
  graph[to].push(from);
})

let dfsVisited = new Array(N).fill(false);
let bfsVisited = new Array(N).fill(false);

//DFS, BFS 출력