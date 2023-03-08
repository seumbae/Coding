function solution(n, t, m, p) {
  var ans = '';
  
  let all = '';
  let num = 0;
  while(all.length <= t*m){
      all += num.toString(n);
      num++;
  }
  
  for(let idx = p-1, i=0; i<t; i++, idx +=m){
      ans += all[idx].toUpperCase();
  }
  
  return ans;
}