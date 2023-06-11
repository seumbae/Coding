const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n').map(e => +e);

const t = input.shift();

for(let i=0; i<t; i++){
    const dp = Array(5);
    dp[0] = 1, dp[1] = 1, dp[2] = 1, dp[3] = 2, dp[4] = 2;
    
    for(let j=5; j<input[i]; j++){
        dp[j] = dp[j-1] + dp[j-5];
    }
    console.log(dp[input[i]-1]);
}
