const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const set = new Set();
for(let i=1; i<=input.length; i++){
  let start=0, end = i;
  while(true){
    const data = input.slice(start++, end++);
    if(data == '') break;
    set.add(data);
  }
}

console.log(set.size);