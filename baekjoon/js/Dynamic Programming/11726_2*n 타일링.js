const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

const dp = Array(input+1).fill(0);
dp[1] = 1
dp[2] = 2;

for(let i=3; i<=input; i++){
    dp[i] = (dp[i-1] + dp[i-2]) % 10007
}
console.log(dp[input])