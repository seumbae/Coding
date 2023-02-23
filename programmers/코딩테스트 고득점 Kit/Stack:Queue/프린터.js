function solution(priorities, location) {
  let ans = 0;
  let que = [];
  
  priorities.forEach((priority, pos) => {
      que.push({pos, priority})
  })
  
  while(que.length){
      let max = Math.max(...que.map(e=>e.priority));
      while(que[0].priority !== max){
          que.push(que.shift());
      }
      ++ans;
      if(que.shift().pos === location) break;
  }
  
  return ans;    
}