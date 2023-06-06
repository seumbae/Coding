const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = +input;
const dp = Array(n+1).fill(0);

for(let x=2; x<=n; x++){
    dp[x] = dp[x-1] + 1;

    if(x % 3 === 0)
        dp[x] = Math.min(dp[x], dp[Math.floor(x/3)] +1);
    if(x % 2 === 0)
        dp[x] = Math.min(dp[x], dp[Math.floor(x/2)] +1);
}
console.log(dp[n])