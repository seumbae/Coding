const strToTime = (line, logs) => {
  const [date, time, completion] = line.split(' ');
  const [hour, minute, seconds] = time.split(':').map(e=>+e);
  
  const end = hour * 3600 + minute * 60 + seconds;
  const start = end - Number(completion.substring(0, completion.length-1)) + 0.001;
  
  logs.push(start, end);
  return [start, end];
}

function solution(lines) {
  let ans = 0;
  const logs = []
  
  lines.forEach((line, idx) => {
      lines[idx] = strToTime(line, logs);
  })
  
  logs.forEach((log, idx) => {
      const start = log;
      const end = start+1;
      
      let cnt = 0;
      for(let i=0; i<lines.length; i++){
          const [from, to] = lines[i]; //ms단위
          
          if((start <= to && to < end) || 
             (start <= from && from < end) ||
             (from <= start && end <= to)
           ) {cnt++;}
      }
      ans = Math.max(ans, cnt);
  })
  
  return ans;
}