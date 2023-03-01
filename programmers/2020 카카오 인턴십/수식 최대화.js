const getPermutation = (permutation, symbols, result) => {
  if(symbols.length === 0) return result.push(permutation)
  
  symbols.forEach((elem, idx) => {
      const rest = [...symbols.slice(0, idx), ...symbols.slice(idx+1)];
      getPermutation([elem, ...permutation], rest, result)
  })
}

const calc = (expr, prior) => {
  let tmp = expr.split(/(\D)/g);
  prior.forEach((symbol) => {
      while(tmp.includes(symbol)){
          const idx = tmp.indexOf(symbol);
          tmp.splice(idx-1,3,eval(tmp.slice(idx-1, idx+2).join('')));
      }
  })
  return Math.abs(tmp[0]);
}

function solution(expression) {
  const symbols = new Set();
  
  for(let i=0; i<expression.length; i++){
      if(expression[i] === '*' || expression[i] === '+' || expression[i] === '-')
          symbols.add(expression[i]);
  }

  const permutation = []
  getPermutation([],[...symbols], permutation);
  
  const values = [];
  
  permutation.forEach((elem) => {
      values.push(calc(expression, elem))
  })
  
  return Math.max(...values);
}