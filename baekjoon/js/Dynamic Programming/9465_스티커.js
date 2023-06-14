const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

for(let i=0; i<T; i++){
    const N = +input.shift();
    const sticker = [...Array(2)].map(() => Array(N));
    input.shift().split(' ').map(e => +e).forEach((el, idx) =>{
        sticker[0][idx] = el;
    });
    input.shift().split(' ').map(e => +e).forEach((el, idx) =>{
        sticker[1][idx] = el;
    });
    
    const dp = [...Array(2)].map(() => Array(N+1).fill(0));
    dp[0][1] = sticker[0][0];
    dp[1][1] = sticker[1][0];
    
    for(let i=2; i<=N; i++){
        dp[0][i] = Math.max(dp[1][i-1], dp[1][i-2]) + sticker[0][i-1];
        dp[1][i] = Math.max(dp[0][i-1], dp[0][i-2]) + sticker[1][i-1];
    }
    console.log(Math.max(dp[0][N], dp[1][N]))
}