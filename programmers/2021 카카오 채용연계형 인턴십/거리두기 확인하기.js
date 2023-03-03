// |r1 - r2| + |c1 - c2|
function solution(places) {
  var answer = [];
  places.map((elem, idx) => {
      const human = [];
      elem.map((it, row) => {
          for(let col = 0; col < 5; col++){
              it[col] === 'P' ? human.push([row, col]) : null
          }
      })
      
      human.sort((a,b) => {
          if(a[0] === b[0]) return a[1] - b[1]
          return a[0] - b[0];
      })
      
      for(let i=0; i<human.length-1; i++){
          for(let j=i+1; j<human.length; j++){
              const distance = Math.abs(human[i][0] - human[j][0]) + Math.abs(human[i][1] - human[j][1]);
  
              if(distance === 2) {
                  if(human[i][0] !== human[j][0] && human[i][1] !== human[j][1]){
                      for(let k=0, r=1; k<2 && r>=0; k++, r--){
                          const [_x, _y] = [human[i][k], human[j][r]];
                          if(elem[idx][_x][_y] === 'O'){
                              answer.push(0)
                              return ;
                          }
                      }   
                  }
                  else if(human[i][0] === human[j][0]){
                      const [_x, _y] = [human[i][0], human[i][1]+1];
                      if(elem[idx][_x][_y] === 'O'){
                              answer.push(0)
                              return ;
                      }
                  }
                  else if(human[i][1] === human[j][1]){
                      const [_x, _y] = [human[i][0]+1, human[i][1]];
                      if(elem[idx][_x][_y] === 'O'){
                          answer.push(0)
                          return ;
                      }
                  }
              }
              else if(distance < 2) {
                  answer.push(0);
                  return;
              }
          }
      }
      answer.push(1);
  })
  return answer;
}
            