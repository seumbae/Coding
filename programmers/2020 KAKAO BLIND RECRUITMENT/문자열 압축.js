function solution(s) {
  var ans = 0;
  for(let i=1 ; i < s.length; i++){
      let cnt = 1;
      let zip = s.length;
      // console.log('i',i)
      for(let j=0; j<s.length; j += i){
          // console.log(s.substring(j, j+i), s.substring(j+i, j+i*2))
          if(s.substring(j, j+i) === s.substring(j+i, j+i*2)) cnt++;
          else{
              if(1 < cnt){
                  zip = zip - cnt*i + i + 1
                  // console.log('cnt', cnt,zip);
              }
              cnt = 1;
          }
      }
      
      if(ans === 0) ans = zip;
      else ans = Math.min(ans, zip);
  }
  return ans;
}