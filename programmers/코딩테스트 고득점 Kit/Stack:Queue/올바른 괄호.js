function solution(s){
  const stack = [];
  const len = s.length;
  
  let idx = 0;
  for(let i=0; i<len; i++){
      if(s[i] === '(')
          stack[idx++] = '(';
      else{
          if(stack[--idx] !== '(') return false;
      }
  }
  
  return idx === 0 ? true : false
}