const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(el => el.split(' ').map(e => +e));
const dp = Array.from({length:n}, () => []);
dp[0][0] = input[0][0]

for(let i=1; i<n; i++){
    let size = input[i].length;
    for(let j=0; j<size; j++){
        if(j === 0){
            dp[i][j] = dp[i-1][0] + input[i][j]
        }
        else if(j === size - 1){
            dp[i][j] = dp[i-1][j-1] + input[i][j]
        }
        else{
            dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + input[i][j]
        }
    }
}
console.log(Math.max(...dp[n-1]))