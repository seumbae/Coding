const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n');

input = input.map((elem) => elem.split(' ').map(Number));

let size;
while(true){
  if(input[0][0] === input[2][0] && input[1][0] === input[3][0]){
    size = (input[4][1]*input[5][1]) - (input[1][1]*input[2][1]);
    break;
  }
  input.push(input.shift());
}

console.log(size * Number(N));