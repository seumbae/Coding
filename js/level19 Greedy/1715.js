const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n').map(Number);
// https://www.acmicpc.net/board/view/90899
// 값에 대한 잦은 수정이 있는경우, 계속 정렬을 해야하는 경우는 heap을 사용하는게 효과적입니다.
if(N === 1){
  console.log(0);
  return 0;
}

let ans = 0

while(input.length !== 1){
  input.sort((a,b) => a-b); // TODO: 이 부분에서 계속해서 정렬을 해주기 때문에 메모리 초과가 난다고 한다.
  ans += input[0] + input[1]
  input.push(input[0] + input[1]);
  input.shift();
  input.shift();
}
console.log(ans);