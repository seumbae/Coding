const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const data = new Array(N).fill(0).map((val, idx) => idx+1);

ans = ''
for(let i=0; i<N; i++){
  for(let j=0; j<K-1; j++){
    data.push(data.shift());
  }
  if(i === N-1) ans += `${data.shift()}`;
  else ans += `${data.shift()}, `;
}
console.log(`<${ans}>`);