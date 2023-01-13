const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [scale,...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = scale.split(' ').map(Number);
const A = input.slice(0, N).map((elem) => elem.split(' ').map(Number));
const B = input.slice(N, input.length).map((elem) => elem.split(' ').map(Number));

for(let i=0; i<N; i++){
  const ans = []
  for(let j=0; j<M; j++){
    ans.push(A[i][j] + B[i][j]);
  }
  console.log(ans.join(' '));
}
