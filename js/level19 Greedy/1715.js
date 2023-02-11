const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n').map(Number);
// https://www.acmicpc.net/board/view/90899
// 값에 대한 잦은 수정이 있는경우, 계속 정렬을 해야하는 경우는 heap을 사용하는게 효과적입니다.

const Heap = () => {
  

}
if(N === 1){
  console.log(0);
  return 0;
}

//처음에는 sort 메소드를 통해 정렬 이후 heap 자료구조를 이용하면 정렬을 하지 않아도 된다. 
input.sort((a,b) => a-b);