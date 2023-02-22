const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n').map(Number);
// https://www.acmicpc.net/board/view/90899
// 값에 대한 잦은 수정이 있는경우, 계속 정렬을 해야하는 경우는 heap을 사용하는게 효과적입니다.

class Heap {
  constructor() {
    this.heap = [];
  }

  insert = (elem) => {
    this.heap.push(elem);
    
    let item = this.heap.length - 1;
    let parent = Math.floor((item-1)/2);

    while(this.heap[item] < this.heap[parent]){
      [this.heap[item], this.heap[parent]] = [this.heap[parent], this.heap[item]];
      
      item = parent;
      parent = Math.floor((parent-1)/2);
    }
  }

  pop = () => {
    if(this.heap.length === 1)
      return this.heap.pop();

    const elem = this.heap[0];
    this.heap[0] = this.heap.pop();
    let parent = 0;
    
    while(true){
      let left = parent*2 +1;
      let right = parent*2 + 2;
      if(this.heap.length <= left) break;
      
      let idx = parent; 
      if(this.heap[left] < this.heap[idx])
      idx = left;
      
      if(right < this.heap.length && this.heap[right] < this.heap[idx])
      idx = right;
      
      if(parent === idx) break;
      
      [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
      parent = idx;
    }
    return elem;
  }

}

const heap = new Heap;

input.forEach((elem) => heap.insert(elem));

let ans = 0;

if(1 < heap.heap.length){
  for(let i=0; i<N-1; i++){
    const a = heap.pop();
    const b = heap.pop();
    heap.insert(a+b);
    ans = ans + a + b;
  }
}

console.log(ans);