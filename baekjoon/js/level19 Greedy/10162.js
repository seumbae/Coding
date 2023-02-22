const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

let time = [300, 60, 10];
let ans = [0, 0, 0];

if(input % 10 !== 0) { console.log('-1'); return 0;}

for(let i=0; i<3; i++){
  ans[i] = parseInt(input / time[i]);
  input %= time[i];  
}
console.log(ans.join(' '));