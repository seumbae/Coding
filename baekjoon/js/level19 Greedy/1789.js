const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

let num = 1;

while(num*(num+1)/2 <= input){
  num++;
}
console.log(num-1);