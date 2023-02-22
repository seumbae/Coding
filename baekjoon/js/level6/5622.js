const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

let ans = 0;
input.forEach((elem) =>{
  switch(elem){
    case 'A': case 'B': case 'C': ans += 3; break;
    case 'D': case 'E': case 'F': ans += 4; break;
    case 'G': case 'H': case 'I': ans += 5; break;
    case 'J': case 'K': case 'L': ans += 6; break;
    case 'M': case 'N': case 'O': ans += 7; break;
    case 'P': case 'Q': case 'R': case 'S': ans += 8; break;
    case 'T': case 'U': case 'V': ans += 9; break;
    case 'W': case 'X': case 'Y': case 'Z': ans += 10; break;
  }
})

console.log(ans);
