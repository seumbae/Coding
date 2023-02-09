const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('').map(Number).sort((a,b) => b-a);

let sum = input.reduce((prev, curr) => prev+curr, 0);

// 3의 배수 : 각 자리의 합이 3의 배수인 경우
if(sum % 3 === 0 && input[input.length-1] === 0)
  console.log(input.join(''));
else
  console.log(-1);