const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N,...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let ans = new Array(+N).fill(1);
input = input.map((elem) => elem.split(' ').map(Number));

for(let i=0; i<+N; i++){
  for(let j=0; j<+N; j++){
    input[i][0] < input[j][0] && input[i][1] < input[j][1] ? ans[i]++ : null; 
  }
}

console.log(ans.join(' '));