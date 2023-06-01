const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require('fs').readFileSync(filePath).toString().trim()

let [n, k] = input.split(' ').map(e => +e)

let que = [...Array(n)].map((e, idx) => idx+1);
let ans = []

let idx = 0
while(que.length){
    if((idx+1) % k === 0){
        ans.push(que.shift())
    }
    else{
        que.push(que.shift())
    }
    idx++;
}
console.log(`<${ans.join(', ')}>`)