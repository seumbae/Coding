const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [str1, str2] = require("fs").readFileSync(filePath).toString().trim().split('\n');

const dp = [...Array(str1.length+1)].map(() => Array(str2.length+1).fill(0));

for(let i=1; i<=str1.length; i++){
    for(let j=1; j<=str2.length; j++){
        if(str1[i-1] === str2[j-1]){
            dp[i][j] = dp[i-1][j-1]+1
        }
        else{
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
}

console.log(Math.max(...dp.flat()))