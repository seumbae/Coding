const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.forEach((elem, idx) => {
  let [L, P, V] = elem.split(' ').map(Number);
  if(L === 0 && P === 0 && V === 0) return 0;

  let ans = parseInt(V/P)*L + (L < V%P ? L : V%P);
  console.log(`Case ${idx+1}: ${ans}`)
})