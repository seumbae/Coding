const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [A, B] = require("fs").readFileSync(filePath).toString().trim().split(" ");

let min = Number(A.replace(/6/g,'5')) + Number(B.replace(/6/g,'5'))
let max = Number(A.replace(/5/g,'6')) + Number(B.replace(/5/g,'6'))

console.log(min, max);