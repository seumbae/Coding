const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(e=> +e);

console.log(solution(input));

function solution(nums) {
  var answer = 0;
  
  const len = Math.floor(nums.length/2);
  const set = new Set([...nums]);
  
  answer = len < set.size ? len : set.size;
  
  return answer;
}
