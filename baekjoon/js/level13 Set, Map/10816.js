const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const cardsArr = input[1].split(' ').map(e=>+e);
const toFind = input[3].split(' ').map(e=>+e);
const obj = {}
const ans = [];

cardsArr.map((elem) => {
  obj[elem] === undefined ? obj[elem] = 1 : obj[elem]++;
})

toFind.map((elem,idx) => {
  obj[elem] ? ans[idx] = obj[elem] : ans[idx] = 0;
})
console.log(ans.join(' '));