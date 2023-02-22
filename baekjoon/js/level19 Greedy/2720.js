const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n").map(e=>+e);

const T = input.shift();

input.forEach((elem) => {
  let ans = [];
  ans.push(Math.floor(elem/25));
  ans.push(Math.floor(elem%25/10));
  ans.push(Math.floor(elem%25%10/5));
  ans.push(Math.floor(elem%25%10%5/1));
  console.log(ans.join(' '));
})