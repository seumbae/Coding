const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

let ans = 0;
for(let i=Math.floor(input/5); i>=0; i--){
  if(i*5 + Math.floor((input-(i*5))/2)*2 === input){
    ans = i+ Math.floor((input-(i*5))/2);
    break;
  }
}
console.log(ans ? ans : -1);