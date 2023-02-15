class Heap {
  constructor(){
    this.heap = []
  }
  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(price) {
    this.heap.push(price);

    let idx = this.heap.length -1;
    let parent = Math.floor((idx-1)/2);

    while(0 <= parent && this.heap[parent] < this.heap[idx]){
      this.swap(parent, idx);

      idx = parent;
      parent = Math.floor((idx-1)/2);
    }
  }

  pop() {
    if(this.heap.length === 1)
      return this.heap.pop();

    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    
    let parent = 0;
    
    while(parent < this.size()){
      let left = parent*2 + 1;
      let right = parent*2 + 2;
      if(this.size() <= left) break;

      let idx = parent;

      if(this.heap[idx] < this.heap[left]) idx = left;
      if(right < this.size() && this.heap[idx] < this.heap[right]) idx = right;

      if(idx === parent) break;

      this.swap(parent, idx);
      parent = idx;
    }
    return item;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const Jewels = input.slice(0, N).map((elem) => elem.split(" ").map(Number)).sort((a,b) => a[0]-b[0]);
const Bags = input.slice(N).map(Number).sort((a,b) => a-b);

const heap = new Heap();
let ans = 0;

let idx = 0;
Bags.forEach((elem) => {
  while(idx<N && Jewels[idx][0] <= elem){
    heap.push(Jewels[idx++][1]);
  }
  if(heap.size()){
    ans += heap.pop();
  }
})

console.log(ans)