const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const numbers = input[0].split(' ').map(Number);

let cnt = 0;
let ans;

const mergeSort = (arr, low, high) =>{
  if(low < high){
    const mid = Math.floor((low+high)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
  }
}

const merge = (arr, low, mid, high) =>{
  const sorted = [];
  let [i, j] = [low, mid+1];

  while(i <= mid && j <= high){
    if(arr[i] <= arr[j]){
      sorted.push(arr[i++]);
    }
    else{
      sorted.push(arr[j++]);
    }
  }
  while(i <= mid){
    sorted.push(arr[i++]);
  }
  while(j <= high){
    sorted.push(arr[j++]);
  }

  let idx = 0;
  i = low;
  while(i <= high){
    arr[i++] = sorted[idx++];
    if(++cnt === K) ans = sorted[idx-1];
  }
}

mergeSort(numbers, 0, numbers.length-1);
ans ? console.log(ans) : console.log(-1);