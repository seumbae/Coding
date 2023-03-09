function solution(N, stages) {
  const arr = [];
  
  stages.sort((a, b) => a-b);
  
  let users = stages.length
  for(let stage=1; stage<=N; stage++){
      const rate = stages.filter(v => v === stage).length;
      arr.push([stages.length, stages.splice(0, rate).length]);
  }
  
  return arr.map((elem, idx) => [idx+1, elem[1]/elem[0]]).sort((a, b) => {
      if(a[1] < b[1]) return 1;
      else if(a[1] > b[1]) return -1;
      else{
          if(a[0] < b[1]) return -1;
          else return 1;
      }
  }).map(e => e[0])
}