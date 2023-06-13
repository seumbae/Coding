const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(e => +e);

const dp = Array(k+1).fill(0);
input.forEach((el, idx) =>{
    const [weight, value] = el.split(' ').map(e => +e);
    for(let i = k; i>=weight; i--){
        dp[i] = Math.max(dp[i], dp[i-weight] + value)
    }
})
console.log(dp[k])