const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

dp = [...Array(input)].map(() => Array(10).fill(0));

for(let i=1; i<10; i++){
    dp[0][i] = 1;
}
const mod = 1000000000;
for(let i=1; i<input; i++){
    for(let j=0; j<10; j++){
        if(j === 0) dp[i][j] = dp[i-1][j+1] % mod;
        else if(1 <= j && j<= 8) dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1]) % mod;
        else dp[i][j] = dp[i-1][j-1] % mod;
    }
}
console.log(dp[input-1].reduce((acc, cur) => (acc+cur)%mod,0))