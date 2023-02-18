class MinHeap {
  constructor() {
    this.store = [];
  }

  push = (elem) => {
    this.store.push(elem);

    let elemIdx = this.size() - 1;
    let parentIdx = Math.floor((elemIdx-1)/2);

    while(0 <= parentIdx && this.store[elemIdx] < this.store[parentIdx]){
      this.swap(elemIdx, parentIdx);

      elemIdx = parentIdx;
      parentIdx = Math.floor((elemIdx-1)/2);
    }
  }

  pop = () => {
    if(this.size() === 1) return this.store.pop();

    const ret = this.store[0];
    this.store[0] = this.store.pop();

    let parent = 0 ;
    while(parent < this.size()){
      let left = parent * 2 + 1;
      let right = parent * 2 + 2;
      if(this.size() <= left) break;

      let idx = parent;
      if(this.store[left] < this.store[idx]) idx = left;
      if(right < this.size() && this.store[right] < this.store[idx]) idx = right;

      if(idx === parent) break;

      this.swap(parent, idx);
      parent = idx;
    }

    return ret;
  }

  size = () => {
    return this.store.length;
  }

  swap = (a, b) => {
    [this.store[a], this.store[b]] = [this.store[b], this.store[a]];
  }

  top = () => {
    return this.store[0];
  }
}
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let room = input.map((e) => e.split(' ').map(v=>+v)).sort((a,b) => a[0] - b[0]);
const heap = new MinHeap();

heap.push(room[0][1]);
for(let i=1; i<N; i++){
  if(room[i][0] < heap.top()){
    heap.push(room[i][1]);
  }
  else{
    heap.pop();
    heap.push(room[i][1]);
  }
}
console.log(heap.size());