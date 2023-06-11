const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n').map(e => +e);

const n = input.shift();
const dp = Array(n+1).fill(0);

dp[1] = input[0]

if(1 < n){
    dp[2] = input[0] + input[1];
    for(let i=3; i<=n; i++){
        dp[i] = Math.max(dp[i-2] + input[i-1], dp[i-3] + input[i-2] + input[i-1], dp[i-1]);
    }
}
console.log(Math.max(...dp));