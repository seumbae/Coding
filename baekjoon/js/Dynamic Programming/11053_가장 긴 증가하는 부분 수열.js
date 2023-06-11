const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const size = +input[0];
const arr = input[1].split(' ').map(e => +e);
const dp = Array(size).fill(1);

// Case 1
// for(let i=0; i<size; i++){
//     dp[i] = 1;
//     for(let j = i-1; j>=0; j--){
//         if(arr[j] < arr[i] && dp[i] <= dp[j]){
//             dp[i] = dp[j] +1;
//         }
//     }
// }
// console.log(Math.max(...dp))

dp[0] = 1;
for(let i=1; i<size; i++){
    let max = 0;
    for(let j=i-1; j>=0; j--){
        if(arr[j] < arr[i] && max < dp[j]){
            max = dp[j];
        }
    }
    dp[i] = max+1;
}
console.log(Math.max(...dp))