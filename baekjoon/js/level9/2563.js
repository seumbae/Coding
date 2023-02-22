const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = +n;

let arr = Array.from(Array(100), () => Array(100).fill(0));

input.forEach((elem) => {
  const [x, y] = elem.split(' ').map(Number);
  
  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      arr[x+i][y+j] = 1;
    }
  }
})

let ans = 0;
for(let i=0; i<100; i++){
  for(let j=0; j<100; j++){
    if(arr[i][j])
      ans++;
  }
}

console.log(ans);


