const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, input] = require("fs").readFileSync(filePath).toString().trim().split("\n");

let time = [];
input.split(' ').map(e=>+e).map((elem, idx) => {
  time.push([idx, elem])
})

time.sort((a, b) => {
  return a[1] - b[1];
})

let ans = 0;
for(let i=0; i<Number(T); i++){
  for(let j=0; j<=i; j++){
    ans += time[j][1];
  }
}
console.log(ans);