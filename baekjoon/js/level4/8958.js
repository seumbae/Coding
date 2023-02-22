const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<Number(input[0]); i++){
  let score = 0;
  let sum = 0;
  for(let j=0; j<input[i+1].length; j++){
    if(input[i+1][j] === 'O'){
      score++;
    }
    else{
      score = 0;
    }
    sum += score;
  }
  console.log(sum);
}