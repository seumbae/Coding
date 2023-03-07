function numToTime(time){
  const hour = Math.floor(time/60).toString().padStart(2, 0);
  const minute = (time%60).toString().padStart(2, 0);
  
  return hour+':'+minute;
}

function solution(n, t, m, timetable) {
  let ans;
  
  timetable.forEach((time,idx) => {
      const [hour, minute] = time.split(':').map(e=>+e);
      timetable[idx] = hour*60 + minute;
  })
  timetable.sort((a, b) => a-b);
  
  let base = 540;
  for(let i=0; i<n; i++, base += t){
      let bus = [];
      while(bus.length !==m && timetable.length){
          if(timetable[0] <= base){
              bus.push(timetable.shift());
          }
          else break;
      }
      if(i === n-1){
          if(bus.length < m)  ans = base;
          else ans = bus[m-1]-1;
      }
  }
  
  return numToTime(ans);
}