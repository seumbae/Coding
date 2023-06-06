const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('').map(e => +e);

const obj = { 0: 0, 1: 0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}

for(let val of input){
    obj[val]++;
}

console.log(Math.max(...Object.entries(obj).filter(el => el[0] !== '6' && el[0] !== '9').map(el => el[1]), Math.ceil((obj['6'] + obj['9'])/2)))