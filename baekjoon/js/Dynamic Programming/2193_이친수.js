const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

const dp = Array(input).fill(1n);

for(let i=2; i<input; i++){
    dp[i] = dp[i-2] + dp[i-1];
}
console.log(dp[input-1].toString())