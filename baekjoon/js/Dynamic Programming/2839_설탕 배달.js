const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = +input;
const arr = Array(5001).fill(1700);
arr[3] = 1;
arr[5] = 1;

for(let x = 6; x <= n; x++){
    arr[x] = Math.min(arr[x-3]+1, arr[x-5]+1);
}
console.log(arr[n] >= 1700 ? -1 : arr[n]);
