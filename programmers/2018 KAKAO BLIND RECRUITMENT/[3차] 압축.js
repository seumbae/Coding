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
//     let idx = 27;
//     let pos = 0;
//     while(pos !== msg.length){
//         for(let i=msg.length; i > pos; i--){
//             let str = msg.substring(pos, i);
//             if(index[str]){
//                 ans.push(index[str]);
//                 pos += str.length;
//                 msg[i] ? str += msg[i] : null;
//                 index[str] ? null : index[str] = idx++;
//             }
//         }
//     }

  return ans;
}