const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

const dp = Array(input+1)
dp[0] = 0n
dp[1] = 1n

for(let i=2; i<=input; i++){
    dp[i] = dp[i-2] + dp[i-1];
}
console.log(dp[input].toString())