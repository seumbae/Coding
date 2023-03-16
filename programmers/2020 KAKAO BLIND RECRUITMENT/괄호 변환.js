const correct = (str) => {
  const stack = [];
  
  for(let i=0; i<str.length; i++){
      if(str[i] === '(') stack.push('(');
      else{
          if(stack.pop() !== '(') return false;
      }
  }
  if(stack.length) return false;
  
  return true;
}

const separate = (str) => {
  let u = '', v = '';
  let left = 0, right = 0;
  
  for(let i=0; i<str.length; i++){
      u += str[i];
      str[i] === '(' ? left++ : right++;
      if(left && right && left === right){
          v += str.substring(i+1);
          break;
      }
  }
  return [u, v];
}

function solution(w) {
  if(w === '') return w;
  
  let [u, v] = separate(w);
  
  if(correct(u)){
      u += solution(v);
      return u;
  }
  else{
      let newStr = '(' + solution(v) + ')';
      let tmp = [...u.substring(1, u.length-1)].map(v => v === '(' ? ')' : '(').join('');
      return newStr + tmp;
  }
  
  return solution(w)
}