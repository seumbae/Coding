const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

for(let i=Math.floor(input/2); i<input; i++){
  let cpInput = input;
  let sum = i;
  for(let j=i; j; j = Math.floor(j/10)){
    sum += (j%10);
  }
  if(sum === input){
    console.log(i);
    return 0;
  }
}
console.log(0);