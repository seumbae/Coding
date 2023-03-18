//case 1: sort
function solution(food_times, k) {
  let list = food_times.map((times, idx) => {
      return {time: times, food: idx+1}}).sort((a, b) => a.time - b.time);
  
  let len = food_times.length;
  let previous = 0;
  for(let i=0; i<len; i++){
      const cur = list[i].time;
      const remains = len - i;
      const after = (cur - previous) * remains;
      previous = cur;
      
      if(k < after){
          return list.slice(i).sort((a,b) => a.food - b.food)[k%remains].food;
      }
      k -= after;
  }
  return -1;
}

//case2 : min Heap