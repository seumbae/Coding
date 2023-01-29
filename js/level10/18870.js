const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.split(' ').map(Number);
const set = new Set(input);

const uniqueNumbers = [...set].sort((a, b) => a-b);

let obj = {};
uniqueNumbers.map((elem, idx) => obj[elem] = idx);

let ans = ''
for(const elem of input){
  ans += obj[elem] + ' ';
}

console.log(ans);
