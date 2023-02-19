const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(' ').map(e=>+e);
const plugs = input[1].split(' ').map(e=>+e);

let ans = 0;
const inUse = [];

for(let i=0; i<K; i++){
  if(inUse.includes(plugs[i])) continue;
  if(inUse.length < N){
    inUse.push(plugs[i]);
  }
  else{
    let reuse;
    for(let j = 0; j<N; j++){
      reuse = plugs.slice(i).includes(inUse[j]);
      if(!reuse){
        inUse.splice(j, 1, plugs[i]);
        ans++;
        break;
      }
    }
    
    if(reuse){
      let toUnplug = [];
      for(let j=0; j<N; j++){
        toUnplug.push(plugs.findIndex((elem, idx) => i<=idx && elem === inUse[j]));
      }
      inUse.splice(toUnplug.findIndex((elem)=> elem === Math.max(...toUnplug)), 1, plugs[i]);
      ans++;
    }
  }
}

console.log(ans);