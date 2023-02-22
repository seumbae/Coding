const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

input.forEach((elem) => {
  const [H, W, N] = elem.split(' ').map(Number);
  const width = (Math.ceil(N/H));
  const floor = N%H === 0 ? H*100 : N%H *100;
  console.log(floor+width);
})
