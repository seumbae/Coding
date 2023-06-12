const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

dp = Array(input);
dp[0] = 1;
dp[1] = 3;

for(let i=2; i<input; i++){
    dp[i] = (dp[i-2]*2 + dp[i-1])%10007
}
console.log(dp[input-1])