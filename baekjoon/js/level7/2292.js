const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let mul = 6;
let base = 1;
for(let i=0; ; i++){
  if(input <= base + i*mul){
    console.log(i+1);
    return 0;
  }
  base += i*mul;
}

