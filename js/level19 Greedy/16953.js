const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [A, B] = require("fs").readFileSync(filePath).toString().trim().split(' ').map(Number);

let cnt = 0;

while(true){
  if(B % 10 === 1){
    B = Math.floor(B/10)
    cnt++;
  }
  else if(B % 2 === 0){
    B = Math.floor(B/2);
    cnt++;
  }
  else if(A !== B){
    console.log(-1);
    return 0;
  }
  
  if(A === B){
    console.log(cnt+1);
    return 0;
  }
  if(B < A){
    console.log(-1);
    return 0
  }
}