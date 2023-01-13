const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testcase, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let prime = Array.from({length:10001}, (v, k) => true);

const sieve = () => {
  for(let i=2; i<=prime.length; i++){
    if(prime[i]){
      for(let j=i*i; j<=prime.length; j += i)
        prime[j] = false;
    }
  }
}

const goldBach = (elem) => {
  for(let i=elem/2; i>=2; i--){
    if(!prime[i]) continue;
    const left = i;
    const diff = elem - left;
    if(prime.find((elem, idx) => idx === diff )){
      console.log(left, diff);
      break;
    }
  }
}

sieve();
input.forEach((elem) => {
  goldBach(elem);
})