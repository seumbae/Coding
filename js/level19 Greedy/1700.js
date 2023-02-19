class MinHeap {
  constructor() {
    this.store = [];
  }

  size = () => {
    return this.store.length;
  }

  //key가 높은것이 우선순위 상위
  push = (value, priority) => {
    const elem = {value, priority};
    this.store.push(elem);

    let itemIdx = this.store.length -1;
    let parentIdx = Math.floor((itemIdx-1)/2);

    while(0 <= parentIdx && this.store[itemIdx].priority < this.store[parentIdx].priority){
      this.swap(parentIdx, itemIdx);

      itemIdx = parentIdx;
      parentIdx = Math.floor((itemIdx-1)/2);
    }
  }

  pop = () => {
    if(this.store.length === 0) 
      return undefined;
    if(this.store.length === 1)
      return this.store.pop();

    const item = this.store[0];
    this.store[0] = this.store.pop();
    
    let parent = 0;
    
    while(parent < this.size()){
      let left = parent*2 + 1;
      let right = parent*2 + 2;
      if(this.size() <= left) break;

      let idx = parent;
      if(this.store[left].priority < this.store[idx].priority) {
        idx = left;
      }
      if(right < this.size() && this.store[idx].priority < this.store[right].priority){
        idx = right;
      }

      if(idx === parent) break;

      this.swap(parent, idx);
      parent = idx;
    }
    return item;
  }

  swap = (a,b) => {
    [this.store[a], this.store[b]] = [this.store[b], this.store[a]];
  }

  isInclude = (val) => {
    let flag = false;
    this.store.map((elem) => elem.value === val ? flag = true: null);
    return flag;
  }

  subPriority = (val) => {
    this.store.map((elem) => elem.value === val ? elem.priority-- : null);
  }
}
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(' ').map(e=>+e);
const appliances = input.shift().split(' ').map(e=>+e);

let priority = {};
appliances.forEach((elem) => {
  if(priority[elem]) priority[elem]++;
  else priority[elem] = 1;
})

const heap = new MinHeap();
for(let i=0; i<N; i++){
  heap.push(appliances[i], --priority[appliances[i]]);
}

let ans = 0;
for(let i=2; i<K; i++){
  if(heap.isInclude(appliances[i])) {
    heap.subPriority(appliances[i]);
    priority[appliances[i]]--;
    continue;
  }
  else{
    heap.pop();
    ans++;
    heap.push(appliances[i], priority[appliances[i]]--);
  }
}
console.log(ans)