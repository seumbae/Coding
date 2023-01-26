const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const compare = (a, b) => {
  return Number(a[0]) - Number(b[0]);
}

const users = input.map((elem) => elem.split(' '));

const sorted = users.sort((a,b) => compare(a, b)).join('\n').replace(/,/g,' ');
console.log(sorted);