const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = +require("fs").readFileSync(filePath).toString().trim();

let target = 1000 - input;
let ans = 0;

const bills = [500, 100, 50, 10, 5, 1];

for(const bill of bills){
  if(target < bill) continue;
  ans += parseInt(target / bill);
  target %= bill;
}
console.log(ans);