const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const testCase = +input.shift();

input.forEach((el) => {
    const [n, m] = el.split(' ').map(e => +e);
    dp = [...Array(n+1)].map(() => Array(m+1));
    for(let i=1; i<=m; i++) dp[1][i] = i;

    for(let i=2; i<=n; i++){
        for(let j=i; j<=m; j++){
            if(j === i) dp[i][j] = 1;
            else{
                dp[i][j] = dp[i-1][j-1] + dp[i][j-1];
            }
        }
    }
    console.log(dp[n][m])
})