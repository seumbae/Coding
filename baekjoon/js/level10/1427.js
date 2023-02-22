const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const number = fs.readFileSync(filePath).toString().trim().split('').map(Number);

console.log(number.sort((a, b) => b-a).join(''));