const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const cards = new Set(input[1].split(' ').map(e=>+e));
const num = input[3].split(' ').map(e=>+e);
const ans = [];

num.map((elem, idx) => cards.has(elem) ? ans[idx] = 1 : ans[idx] = 0);

console.log(ans.join(' '));