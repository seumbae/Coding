const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const pos = new Array(26).fill(0);

for(let i=0; i<input.length; i++){
  pos[input.charCodeAt(i) -65]++;
}

if(1 < pos.filter((elem) => elem%2).length){
  console.log("I'm Sorry Hansoo");
  return 0;
}
let ans = ''
for(let i=0; i<26 ;i++){
  for(let j=0; j<Math.floor(pos[i]/2); j++){
    ans += String.fromCharCode(i+65);
  }
}

for(let i=0; i<26; i++){
  if(pos[i]%2) ans += String.fromCharCode(i+65);
}

for(let i=25; i>=0; i--){
  for(let j=0; j<Math.floor(pos[i]/2); j++){
    ans += String.fromCharCode(i+65);
  }
}

console.log(ans);