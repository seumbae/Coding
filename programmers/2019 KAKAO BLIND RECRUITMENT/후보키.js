const getCombinations = (arr, num) => {
  const result = [];
  if(num === 1) return arr.map(v => [v]);
  
  arr.forEach((elem, idx, origin) => {
      const rest = origin.slice(idx+1);
      const combi = getCombinations(rest, num - 1);
      const attached = combi.map((v) => [elem, ...v]);
      result.push(...attached);
  })
  return result;
}

const checkMinimal = (relation, combination) => {
  const results = combination.filter(v => v.length === 1);
  
  combination.forEach((elem) => {
      results.forEach((res) => {
          if(elem.includes(res)) return;
      })
  })

}

const checkUniq = (relation, combination) => {
  const results = [];
  
  combination.forEach((combi, idx) => {
      const set = new Set();
      relation.forEach(elem => {
          set.add(combi.map(index => elem[index]).join(''))
      })
      if(set.size === relation.length)
          results.push(combi)
  })
  return results
}

function solution(relation) {
  const column = Array.from({length: relation[0].length}, (v,i) => i);
  let combi = [];
  
  for(let i=0; i<column.length; i++){
      combi.push(...getCombinations(column, i+1));
  }
  
  combi = checkUniq(relation, combi);
  combi = checkMinimal(relation, combi)
}  