const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n');

for(let i=0; i<Number(T); i++){
  const n = +input[1];
  const datas = input.splice(0, n+2);
  const [x1, y1, x2, y2] = datas.shift().split(' ').map(Number);
  datas.shift();
  const planet = datas.map((elem) => elem.split(' ').map(Number));
  
  let ans = 0;
  planet.forEach((elem) => {
    const x = elem[0], y = elem[1], r = elem[2];
    const distance1 = Math.sqrt((x1-x)**2+(y1-y)**2);
    const distance2 = Math.sqrt((x2-x)**2+(y2-y)**2);
    if(distance1 < r && r < distance2){ //1번 점이 원 내부에 있으면서 2번 점이 원 외부에 있는 경우
      ans++ 
    }
    else if(distance2 < r && r < distance1){ //2번 점이 원 내부에 있으면서 1번 점이 원 외부에 있는 경우
      ans++;
    }
  })
  console.log(ans);
}