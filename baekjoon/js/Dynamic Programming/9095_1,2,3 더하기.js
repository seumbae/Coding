const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split('\n').map(e => +e);

const n = +input.shift();

input.forEach((el) => {
    const dp = Array(el+1).fill(0);
    dp[1] = 1; dp[2] = 2, dp[3] = 4;

    for(let i=4; i<=el; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    console.log(dp[el]);
})