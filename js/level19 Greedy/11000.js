const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
let room = input.map((e) => e.split(' ').map(v=>+v)).sort((a,b) => a[0] - b[0]);
// TODO: 우선순위 큐 


let ans = 0;
while(room.length){
  let target = room.shift();
  for(let i=0; i<room.length; i++){
    if(target[1] <= room[i][0]){
      target = room[i];
      room.splice(i--, 1); //이거 때문에 시간초과가 뜨는거 같음X 애초에 큰 값이 들어오면 시간초과가 날 수밖에 없음 반복문을 줄여야함
    }
  }
  ans++;
}

console.log(ans);