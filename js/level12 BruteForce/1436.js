const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

let num = '666';
let ans = 666;
let cnt = 0;
while(true){
  if(String(ans++).indexOf(num) !== -1)
    cnt++;
  if(cnt === input){ console.log(ans-1); return 0;}
}