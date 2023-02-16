const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const room = input.map((e) => e.split(' ').map(v=>+v)).sort((a,b) => a[0] - b[0]);

let ans = 0;
// console.log(room)
while(room.length){
  let target = room.shift();
  for(let i=0; i<room.length; i++){
    if(target[1] <= room[i][0]){
      target = room[i];
      room.splice(i--, 1); //이거 때문에 시간초과가 뜨는거 같음
    }
  }
  ans++;
}
console.log(ans);