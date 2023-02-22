const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [x,y,w,h] = require("fs").readFileSync(filePath).toString().trim().split(' ').map(Number);
//직사각형과 점의 거리를 구하는 문제

console.log(Math.min(x, y, h-y, w-x));