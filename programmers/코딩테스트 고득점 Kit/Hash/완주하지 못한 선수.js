const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let [participant, completion] = require("fs").readFileSync(filePath).toString().trim().split("\n").map((e) => e.split(' '));

console.log(solution(participant, completion));

function solution(participant, completion) {
  const map = new Map();

  for(let i=0; i<participant.length; i++){
    map.set(participant[i], (map.get(participant[i]) || false) + 1);
  }

  for(let i=0; i<completion.length; i++){
    map.set(completion[i], (map.get(completion[i]) || false) - 1);
  }

  for(let [key, val] of map){
    if(0 < val) return key
  } 
}