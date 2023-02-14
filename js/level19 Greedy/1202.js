const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const Jewelry = input.slice(0, N).map((elem) => elem.split(" ").map(Number)).sort((a,b) => {
  if(a[1] === b[1]) return a[0]-b[0];
  return b[1]-a[1];
});
const Bags = input.slice(N).map(Number).sort((a,b) => a-b);

let ans = 0;
Bags.forEach((elem) => {
  for(let i=0; i<Jewelry.length;){ // 단순히 for문으로는 시간초과 남. nlog(n)의 사간복잡도로 구현해야함.
    if(Jewelry[i][0] <= elem){
      ans += Jewelry[i][1];
      Jewelry.shift();
      break;
    }
    else{
      Jewelry.push(Jewelry.shift());
    }
  }
})
console.log(ans);