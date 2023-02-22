const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = [];

for(let i=1; i<input.length; i+=2){
  arr.push(input.slice(i, i+2));
}

arr.map((elem) => {
  const [floor, ho] = elem.map(Number);
  let ans = [];
  for(let i=0; i<ho; i++){
    ans.push(i+1);
  }

  for(let i=1; i<=floor; i++){
    for(let j=1; j<ho; j++){
      ans[j] = ans[j-1] + ans[j];
    }
  }
  console.log(ans[ho-1]);
})