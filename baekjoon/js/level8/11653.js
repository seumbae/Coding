const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +fs.readFileSync(filePath).toString().trim();

let division = 2;
while(1 < input){
  if(input % division === 0){
    console.log(division);
    input /= division;
    division--;
  }
  division++;
}