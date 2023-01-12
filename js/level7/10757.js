const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt);
console.log((A+B).toString());