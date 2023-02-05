const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testCase, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n');

const [A, B] = testCase.split(' ').map(e=>+e);
const set = new Set(input[0].split(' ').concat(input[1].split(' '))).size;

console.log(2*set - A - B);