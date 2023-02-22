const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const one = input.split(0).filter((val) => val !== '') 
const zero = input.split(1).filter((val) => val !== '')

console.log(Math.min(one.length, zero.length));