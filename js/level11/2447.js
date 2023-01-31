const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let N = +fs.readFileSync(filePath).toString().trim();

const pattern = (x, y) => {
  if(x%3 === 1 && y%3 === 1){
    line += ' ';
  }
  else if(3 <= x || 3 <= y){
    pattern(Math.floor(x/3), Math.floor(y/3));
  }
  else line += '*';
}

let line = ''
for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    pattern(i,j);
  }
  console.log(line);
  line = '';
}