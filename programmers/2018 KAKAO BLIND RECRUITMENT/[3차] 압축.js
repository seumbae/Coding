function solution(msg) {
  var ans = [];
  const alpha = [...new Array(26)].map((e, i) => String.fromCharCode(i+65));
  const index = alpha.reduce((acc, curr, i) => (acc[curr] = i+1, acc), {})
  
  for(let i=0; i<msg.length; i++){
      let w = msg[i];
      let c = msg[i+1];
      
      while(index[w+c]){
          i++;
          
          w = w+c;
          c = msg[i+1];
      }
      ans.push(index[w]);
      index[w+c] = Object.keys(index).length +1;
  }

  return ans;
}