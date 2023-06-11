const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const dp = [...Array(n+1)].map(() => Array(3).fill(0))

input.forEach((el, idx) => {
    const [red, green, blue] = el.split(' ').map(e => +e);
    dp[idx][0] = red, dp[idx][1] = green, dp[idx][2] = blue;
    
    if(idx !== 0){
        dp[idx][0] += Math.min(dp[idx-1][1], dp[idx-1][2]);
        dp[idx][1] += Math.min(dp[idx-1][0], dp[idx-1][2]);
        dp[idx][2] += Math.min(dp[idx-1][0], dp[idx-1][1]);
    }
})
console.log(Math.min(...dp[n-1]))