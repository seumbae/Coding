const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const solve = (elem) => {
  elem.sort((a,b) => a-b);
  const avg = elem.reduce((prev, curr) => prev+curr,0);
  console.log(Math.floor(avg/5)+'\n'+elem[2]);
}
solve(input);