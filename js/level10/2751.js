const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * O(nlogn) 정렬 알고리즘
 * Tim - Best(n), Avg(nlogn), Worst(nlogn);
 * Quick - Best(nlogn), Avg(nlogn), Worst(n^2), 분할 정복
 * Merge - Best(nlogn), Avg(nlogn), Worst(nlogn)
 * Heap - Best(nlogn), Avg(nlogn), Worst(nlogn)
 */

/**
 * Tim Sort
 * const ans = numbers.map(Number).sort((a,b) => a-b);
 * console.log(ans.join('\n'));
 */

/**
 * TODO: Quick, Merge, Heap
 */

/**
 * Quick Sort
 * 특정한 값을 기준(피벗, pivot)으로 큰 숫자와 작은 숫자를 나눈다.
 * BOJ 2751에 한하여 Quick Sort가 최악의 경우 n^2이기 때문에 시간 초과 발생
const quickSort = (arr, left = 0, right = arr.length -1) => {
  if(right <= left){
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = arr[mid];
  const partition = divide(arr, left, right, pivot);
  
  quickSort(arr, left, partition-1);
  quickSort(arr, partition, right);

  return arr;
}

const divide = (arr, left, right, pivot) => {
  while(left <= right){
    while(arr[left] < pivot){
      left++;
    }
    while(pivot < arr[right]){
      right--;
    }
    if(left <= right){
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++; right--;
    }
  }
  return left;
}

const sorted = quickSort(numbers.map(Number));
console.log(sorted.join('\n'));
 
 */





