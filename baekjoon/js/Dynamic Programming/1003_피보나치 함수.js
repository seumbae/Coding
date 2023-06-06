const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split('\n').map(e => +e);

const testCase = +input.shift();

input.forEach((elem) => {
    const dp = Array(elem+1)
    dp[0] = [1, 0];
    dp[1] = [0, 1];

    for(let i=2; i<=elem; i++){
        dp[i] = [dp[i-1][0] + dp[i-2][0], dp[i-1][1] + dp[i-2][1]]
    }
    console.log(dp[elem].join(' '))
})