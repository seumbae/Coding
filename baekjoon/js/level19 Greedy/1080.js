const change = (arr, col, row) => {
  for(let i=col; i<col+3; i++){
    for(let j=row; j<row+3; j++){
      arr[i][j] = arr[i][j] === 1 ? 0 : 1;
    }
  }
}

const check = (A, B, N, M) => {
  for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
      if(A[i][j] !== B[i][j]) return false;
    }
  }
  return true;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(' ').map(Number);
const A = input.slice(0, N).map((elem) => elem.split('').map(Number));
let B = input.slice(N).map((elem) => elem.split('').map(Number));

let ans = 0;
for(let col = 0; col<=N-3; col++){
  for(let row=0; row<=M-3; row++){
    if(A[col][row] !== B[col][row]){
      change(A, col, row);
      ans++;
    }
  }
}

if(check(A, B, N, M)){
  console.log(ans);
}
else{
  console.log(-1);
}