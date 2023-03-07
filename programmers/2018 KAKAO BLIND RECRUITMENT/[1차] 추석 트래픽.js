const strToTime = (line) => {
  const [date, time, completion] = line.split(' ');
  const [hour, minute, seconds] = time.split(':').map(e=>+e);
  
  const end = hour * 3600 + minute * 60 + seconds;
  const start = end - Number(completion.substring(0, completion.length-1)) + 0.001;
  
  return [start, end];
}

function solution(lines) {
  let ans = 0;
  
  lines.forEach((line, idx) => {
      lines[idx] = strToTime(line);
  })
  
  
  lines.forEach((line, idx) => {
      const [start, end] = line;
      console.log('1',start, start+0.999)
      let cnt = 0;
      for(let i=0; i<lines.length; i++){
          const [from, to] = lines[i]; //ms단위
          console.log('2',from, to)
          
          if((to <= start && to < start+0.999) || 
             (start <= from && from < start+0.999) ||
             (from <= start && start+0.999 < to)
           ) cnt++;
      }
      ans = Math.max(ans, cnt);
  })
  return ans;
}