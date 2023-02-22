const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, score] = fs.readFileSync(filePath).toString().trim().split("\n");

const solve = () => {
  const [N, k] = input.split(' ').map(Number);
  const scores = score.split(' ').map(Number);

  scores.sort((a, b) => b-a);
  console.log(scores[k-1]);
}

solve();