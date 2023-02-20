const dfs = (v) => {
  const stack = [v];
  let ans  = 0;
  while(stack.length){
    const node = stack.pop();
    if(!visited[node]){
      visited[node] = true;
      ans++;
      stack.push(...graph[node]);
    }
  }
  return ans-1;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [computer, direct] = input.splice(0, 2).map(e=>+e);
const graph = [...new Array(computer+1)].map(() => []);
input.forEach((elem) => {
  const [from, to] = elem.split(' ').map(e=>+e);

  graph[from].push(to);
  graph[to].push(from);
})

let visited = new Array(computer+1).fill(false);

console.log(dfs(1));