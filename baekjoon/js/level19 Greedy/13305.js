const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

let roads = input[1].split(' ').map(BigInt);
let oil = input[2].split(' ').map(BigInt);

let ans = 0n;
let target = oil[0];
for(let i=0; i < roads.length;i++){
  ans += target * roads[i];
  if(oil[i+1] < target) target = oil[i+1];
}
console.log(String(ans));