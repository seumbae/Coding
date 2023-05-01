const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)

let ans = 0
let sum = 0
let left = right = 0

while(right < n){
    sum += numbers[right++]
    if(sum === m) ans++
    while(m < sum){
        sum -= numbers[left++]
        if(sum === m) ans++
    }
}
console.log(ans)