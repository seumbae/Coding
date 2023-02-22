const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let layer = 1;
// 1~n까지 합 = n*(n+1)/2, 그렇다면 1~n-1까지 합 = (n-1)*n/2
while(true){
  if(input <= layer*(layer+1)/2){
    const idx = input - layer*(layer-1)/2;
    if(layer % 2 === 0){
      console.log(`${idx}/${layer-idx+1}`)
      break;
    }
    else{
      console.log(`${layer-idx+1}/${idx}`);
      break;
    }
  }
  layer++;
}