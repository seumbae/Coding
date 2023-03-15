
function solution(s) {
    var ans = s.length;
    for(let i=1 ; i <= Math.floor(s.length/2); i++){
        let cnt = 1;
        let str = ''

        for(let j=0; j<s.length; j += i){
            let cur = s.substring(j, j+i);
            let next = s.substring(j+i, j+i*2);
            
            if(cur === next) cnt++;
            else{
                str = 1 < cnt ? str+cnt+cur : str + cur;
                cnt = 1;
            }
        }
        ans = Math.min(ans, str.length);
    }
    return ans;
}

function solution(s) {
  var ans = s.length;
  for(let i=1 ; i <= Math.floor(s.length/2); i++){
      let cnt = 1;
      let zip = s.length;
      for(let j=0; j<s.length; j += i){
          if(s.substring(j, j+i) === s.substring(j+i, j+i*2)) cnt++;
          else{
              if(1 < cnt){
                  // 1 대신에 cnt.toString().length를 더하는 이유는 두자리 이상의 숫자가 나올 수 있기 때문 문자열에서는 10을 길이가2로 판단한다.
                  zip = zip - cnt*i + i + cnt.toString().length
              }
              cnt = 1;
          }
      }
      
      ans = Math.min(ans, zip);
  }
  return ans;
}