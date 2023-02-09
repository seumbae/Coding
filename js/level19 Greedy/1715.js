const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n').map(Number);

// TODO: 아래와 같은 논리를 사용
// 단순히 정렬 후 더해나가면 안된다.
// 이를테면, 5, 6, 7, 8의 경우 먼저 5, 6을 더하고 7,8을 더하는 순으로 나아가야한다. 즉 가자으 적은 두 뭉치를 더해나가야 한다.
// https://www.acmicpc.net/board/view/90899
// 
input.sort((a,b) => a-b);

let ans = 0;

for(let i=0; i<N-1; i++){
  input[i+1] += input[i];
  ans += input[i+1];
}

console.log(ans)