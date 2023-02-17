const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
let room = input.map((e) => e.split(' ').map(v=>+v)).sort((a,b) => a[0] - b[0]);
// TODO: Min Heap
// https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9
console.log(room);
let ans = 0;

class MinHeap {
  constructor() {
    this.store = [];
  }

  push = (elem) => {

  }

  pop = () => {

  }

  size = () => {
    return this.store.length;
  }
}
console.log(ans);