const binary = (arr, mid, k) => {
  let consecutive = 0;
  
  for(let i=0; i<arr.length; i++){
      if(arr[i] < mid) consecutive++
      else consecutive = 0
  
      if(consecutive === k) return false;
  }
  return true;
}

function solution(stones, k) {
  let left = 0;
  let right = 200000000;
  // 원소의 가장 큰 값은 2억으로 모든 원소가 2억인 경우 2억명이 통과할 수 있다는 뜻
  // 따라서 이진 탐색 진행
  while(left < right-1){
      const mid = Math.floor((left+right)/2);
      
      if(binary(stones, mid, k)) left = mid;
      else right = mid;
  }
  return left;
}