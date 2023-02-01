const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [testCase, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<testCase; i++){
  const [N, M] = input[i*2].split(' ').map(Number);
  const priority = input[i*2 +1].split(' ').map(Number).map((elem,idx) => {return [idx, elem]});

  let cnt = 0;
  while(true){
    const max = Math.max(...new Map(priority).values());
    while(priority[0][1] !== max){
        priority.push(priority.shift());
    }
    if(priority[0][0] === M){
      console.log(++cnt);
      break;
    }
    priority.shift();
    cnt++;
  }
}

