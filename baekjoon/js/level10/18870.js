const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, input] = fs.readFileSync(filePath).toString().trim().split('\n');
/*
  Object의 key, value 사용
input = input.split(' ').map(Number);
const set = new Set(input);

const uniqueNumbers = [...set].sort((a, b) => a-b);

let obj = {};
uniqueNumbers.map((elem, idx) => obj[elem] = idx);

let ans = ''
for(const elem of input){
  ans += obj[elem] + ' ';
}

console.log(ans);
*/

/**
 * lowerbound func 구현, 이진 탐색의 경우 정렬이 되어 있어야함.
 */

const lowerbound = (arr, elem) => {
  const len = arr.length;
  let [low, high] = [0, len-1]

  while(low <= high){
    const mid = Math.floor((low + high) / 2);
    if(arr[mid] === elem){
      return mid;
    }
    if(arr[mid] < elem){
      low = mid + 1;
    }
    else{
      high = mid - 1;
    }
  }
  return -1;
}

input = input.split(' ').map(Number);
const uniq = [...new Set(input)].sort((a, b) => a-b);

console.log(input.map((elem) => lowerbound(uniq, elem)).join(' '));

