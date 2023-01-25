const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

ans = input.map((elem) => elem.split(' ').map(Number)).sort((a, b) => {
  if(a[0] === b[0])
    return a[1] - b[1];
  return a[0] - b[0];
}).join('\n').replace(/,/g, " ");

console.log(ans);