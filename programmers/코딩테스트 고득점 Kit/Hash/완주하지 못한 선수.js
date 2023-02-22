const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [participant, completion] = require("fs").readFileSync(filePath).toString().trim().split("\n").map((e) => e.split(' '));

console.log(solution(participant, completion));

function solution(participant, completion) {
  let answer = ''

  participant.sort();
  completion.sort();
  for(let i=0; i<participant.length; i++){
    if(participant[i] !== completion[i]){
      ans = participant[i];
      break;
    }
  }
  
  return answer;
}