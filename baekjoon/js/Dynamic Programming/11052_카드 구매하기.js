const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, input] = require("fs").readFileSync(filePath).toString().trim().split('\n');
N = +N;
const cards = input.split(' ').map(e => +e);
const dp = Array(N+1).fill(0);

for(let i=1; i<=N; i++){
    for(let j=1; j<=i; j++){
        dp[i] = Math.max(dp[i], dp[i-j] + cards[j-1])
    }
}
console.log(dp[N])