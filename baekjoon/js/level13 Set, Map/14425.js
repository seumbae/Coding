const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testCase, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = testCase.split(' ').map(e=>+e);
const set = new Set(input.slice(0, N));
const str = input.slice(N);

let ans = 0;
str.map((elem) => set.has(elem) ? ans++ : null);
console.log(ans);