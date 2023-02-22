const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const [hour, min] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

if (min < 45) {
  console.log((hour+23)%24, (min+15)%60);
}
else{
  console.log(hour, min-45);
}
