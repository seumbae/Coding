function solution(gems) {
  var ans = [1, gems.length];
  const setCnt = new Set(gems).size;
  const map = new Map();
  
  let left = 0, right = 0;
  
  map.set(gems[0],1)
  while(right < gems.length){
      if(setCnt === map.size){
          ans = ans[1] - ans[0] > right - left ? [left+1, right+1] : ans;
          
          map.set(gems[left], map.get(gems[left])-1);
          if(map.get(gems[left]) === 0){
              map.delete(gems[left]);
          }
          left++;
      }
      else{
          right++;
          map.set(gems[right], (map.get(gems[right]) || 0) + 1);
      }
  }
  
  return ans
}

function solution(gems) {
  var ans = [1, gems.length];
  const gemsCnt = new Set(gems).size;
  const map = new Map();

  
  gems.forEach((it, idx) => {
      map.delete(it);
      map.set(it, idx+1);
      if(gemsCnt === map.size){
          const val = map.values().next().value
          ans = ans[1] - ans[0] > idx-val+1 ? [val, idx+1] : ans;
      }
  })
  
  return ans
}

function solution(gems) {
  var ans = [];
  const gemsCnt = new Set(gems).size;
  const map = new Map();

  
  gems.forEach((it, idx) => {
      map.delete(it);
      map.set(it, idx+1);
      if(gemsCnt === map.size){
          ans.push([map.values().next().value, idx+1])
      }
  })
  
  ans.sort((a, b) => (a[1]-a[0]) - (b[1] -b[0]))
  
  return ans[0]
}