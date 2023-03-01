function solution(user_id, banned_id) {
  let arr = [];
  
  for(let i=0; i<banned_id.length; i++){
      const banned = banned_id[i];
      const match = [];
      for(let j=0; j<user_id.length; j++){
          if(banned.length !== user_id[j].length) continue;
          let flag = true;
          for(let k=0; k<user_id[j].length; k++){
              if(banned[k] !== user_id[j][k] && banned[k] !== '*') {
                  flag = false;
                  break;
              }
          }
          if(flag){
              match.push(user_id[j]);
          }
      }
      arr.push(match);
  }
  let ans = new Set();
  dfs(arr.slice(), [], ans, 0);
  return ans.size;
}

function dfs(user, expect, ans, idx){
  if(idx === user.length){
      ans.add(expect.sort().join());
      return ;
  }
  
  const candidate = user[idx];
  candidate.forEach((id) => {
      if(!expect.includes(id)){
          let deepExpect = expect.slice();
          deepExpect.push(id);
          dfs(user, deepExpect, ans, idx+1);
      }
  })
}