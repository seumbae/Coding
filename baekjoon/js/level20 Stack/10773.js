const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N,...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const stack = []
input.forEach((elem) => {
  elem ? stack.push(elem) : stack.pop();
})

console.log(stack.reduce((a, b) => a+b, 0));