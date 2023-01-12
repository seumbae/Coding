const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

for(let i = Math.floor(input/5); i>=0 ; i--){
  let ans = i;
  if((input - (i*5)) % 3 === 0){
    console.log(ans + ((input - (i*5)) / 3));
    return 0;
  }
}
console.log(-1);