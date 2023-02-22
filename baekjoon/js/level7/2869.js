const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [a, b, v] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(Math.ceil((v-b) / (a-b)));

// 달팽이는 하루에 (a-b)미터 씩 총 v미터를 올라가면 된다.
// 하지만 달팽이가 목표 지점에 도달한 날에는 미끄러지는 것을 감안하면 안되니 총 v-b미터를 올라가게 되는 것과 같다.
