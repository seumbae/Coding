function solution(progresses, speeds) {
  var ans = [];
  
  let toFinish = progresses.map((elem, idx) => Math.ceil((100-elem)/speeds[idx]));
  
  let cnt = 1;
  let cmp = toFinish[0];
  for(let i=1; i<toFinish.length; i++){
      if(toFinish[i] <= cmp) cnt++;
      else{
          ans.push(cnt);
          cnt = 1;
          cmp = toFinish[i];
      }
  }
  ans.push(cnt);
  
  return ans;
}

/*
function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
*/
