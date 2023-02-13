const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [N, ...input] = require("fs").readFileSync(filePath).toString().trim().split('\n');

// https://www.acmicpc.net/board/view/85400

input = input.map((elem) => elem.split('').reverse().join('')).sort((a,b) => b.length - a.length);
let obj = {};

let ans = 0;
let num = 9; // 가장 자릿수가 많은 문자열의 첫 문자를 무조건 9로 주면 안된다.
let len = input[0].length
for(let i=len-1; i>=0; i--){
  input.forEach((elem) =>{
    let pow = 10 ** i;
    if(obj[elem[i]] === undefined && elem[i] !== undefined){
      obj[elem[i]] = num--;
      ans += parseInt(obj[elem[i]] * pow);
    }
    else if(elem[i] !== undefined && obj[elem[i]] !== undefined){
      ans += parseInt(obj[elem[i]] * pow);
    }
  })
}
console.log(ans);
