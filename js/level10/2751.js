const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [input, ...numbers] = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * TODO: Heap
 */

/**
 * O(nlogn) 정렬 알고리즘
 * Tim - Best(n), Avg(nlogn), Worst(nlogn);
 * Quick - Best(nlogn), Avg(nlogn), Worst(n^2), 분할 정복
 * Merge - Best(nlogn), Avg(nlogn), Worst(nlogn)
 * Heap - Best(nlogn), Avg(nlogn), Worst(nlogn)
 */

/**
 * Heap Sort stable(X)
 * Heapify를 거쳐 Max Heap(부모 노드의 값이 자식 노드보다 항상 큰 힙)으로 먼저 변환
 */

const heapSort = (arr) => {
  //heapify
  for(let i = 1; i < arr.length ; i++){
    let child = i;
    do{
    const parent = Math.floor(child / 2);
    if(arr[parent] < arr[child]){
      [arr[parent], arr[child]] = [arr[child], arr[parent]];
    }
    child = parent;
    }while(child);
  }

  for(let i = arr.length-1; i >= 0; i--){
    // max heap이기 때문에 root 노드가 가장 값이 커서 맨 뒤로 보낸다. -> 오름차순
    [arr[i], arr[0]] = [arr[0], arr[i]];
    
    let parent = 0 ;
    let child = 1;
    do{
      child = 2*parent + 1;
      // 자식 중에 더 큰 값 찾기
      if(child < i-1 && arr[child] < arr[child+1]){
        child++;
      }
      if(child < i && arr[parent] < arr[child]){
        [arr[parent], arr[child]] = [arr[child], arr[parent]];
      }
      parent = child;
    }while(child < i);
  }
  return arr;
}

console.log(heapSort(numbers.map(Number)).join('\n'));


/**
 * Merge Sort
 * shift를 사용해도 되지만 이로써 연산이 증가하여 2751번에서는 시간초과 발생
const merge = (left, right) => {
  const sorted = [];
  let [i,j] = [0,0];
  while(i < left.length && j < right.length){
    if(left[i] < right[j]){
      sorted.push(left[i]);
      i++;
    }else{
      sorted.push(right[j]);
      j++;
    }
  }
  while(i < left.length){
    sorted.push(left[i]);
    i++;
  }
  while(j < right.length){
    sorted.push(right[j]);
    j++;
  }
  return sorted;
}

const mergeSort = (arr) => {
  if(arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
const sorted = mergeSort(numbers.map(Number));
console.log(sorted.join('\n'));
 */

/**
 * Tim Sort
 * const ans = numbers.map(Number).sort((a,b) => a-b);
 * console.log(ans.join('\n'));
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