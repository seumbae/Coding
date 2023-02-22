const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [T, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n');

input.forEach((elem) => {
  const [x1, y1, r1, x2, y2, r2] = elem.split(' ').map(Number);
  const d = Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
  const bigR = Math.max(r1, r2), smallR = Math.min(r1, r2);
  if(d === 0 && bigR === smallR){ //무한대
    console.log(-1);
  }
  else if(bigR - smallR < d && d < bigR + smallR){ //두점
    console.log(2);
  }
  else if(bigR + smallR === d || bigR - smallR === d){ //한점
    console.log(1);
  }
  else {
    console.log(0);
  }
})