const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const counsel = input.map((el) => el.split(' ').map(e => +e));
const dp = Array(N+1).fill(0);

for(let i=N-1; i>=0; i--){
    const [period, cost] = counsel[i];
    if(N < i + period){
        dp[i] = dp[i+1];
    }
    else{
        dp[i] = Math.max(dp[i+1], cost + dp[i+period])
    }
}
console.log(dp[0])