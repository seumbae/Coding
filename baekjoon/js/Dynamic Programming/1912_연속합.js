const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const arr = input[0].split(' ').map(e => +e);
const dp = Array(n).fill(0);
dp[0] = arr[0];

for(let i=1; i<n; i++){
    dp[i] = Math.max(arr[i], dp[i-1]+arr[i], arr[i-1] + arr[i])
}
console.log(Math.max(...dp))