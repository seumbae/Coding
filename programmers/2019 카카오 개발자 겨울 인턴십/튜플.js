function solution(s) {
  var ans = [];
  let parse = s.replace('{{', '').replace('}}', '').split('},{').map(elem => elem.split(',').map(e=>+e))
  
  parse.sort((a, b) => a.length - b.length);
  
  for(let i=0; i<parse.length; i++){
      for(let j=0; j<parse[i].length; j++){
          if(ans.includes(parse[i][j])) continue;
          else ans.push(parse[i][j])
      }
  }
  
  return ans;
}