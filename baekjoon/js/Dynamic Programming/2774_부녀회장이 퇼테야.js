const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split('\n').map(e => +e);

const testcase = +input.shift();

for(let i=0; i<testcase; i++){
    const [k, n] = [input[i*2], input[i*2+1]];

    const dp = [...Array(k+1)].map(el => Array(n+1).fill(0))
    for(let i=1; i<=n; i++){
        dp[0][i] = i;
    }
    
    for(let i=1; i<=k; i++){
        for(let j=1; j<=n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    console.log(dp[k][n])
}