const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split('\n');

input.forEach((elem) => {
  const side = elem.split(' ').map(Number).sort((a, b) => b-a);
  if(side.every((curr) => curr === 0)) return;
  Math.pow(side[0], 2) === Math.pow(side[1],2) + Math.pow(side[2],2) ? console.log('right') : console.log('wrong');
})
