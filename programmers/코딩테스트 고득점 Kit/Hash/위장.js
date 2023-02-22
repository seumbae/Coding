function solution(clothes) {
  let answer = 1 ;
  const map = new Map();
  
  clothes.forEach(elem => {
      map.set(elem[1], (map.get(elem[1]) || 0) + 1);
  })
  
  for(let val of map.values()){
      answer *= (val+1);
  }
  
  return answer-1;
}