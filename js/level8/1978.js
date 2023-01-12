const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const  [n, input] = fs.readFileSync(filePath).toString().trim().split('\n');

let ans = +n;
const val = input.split(' ').map(Number);

val.forEach((elem) => {
  if(elem === 1) {ans--;}
  for(let i=2; i<elem; i++){
    if(elem % i === 0){
      ans--;
      break;
    }
  }
})

console.log(ans);