// 1) 자기 원소가 P일 때, 상하좌우 원소에 P가 없다.
// 2) 자기 원소가 O일 때, 상하좌우 원소에 P가 1개 이하이다.

// |r1 - r2| + |c1 - c2|
function solution(places) {
  var answer = [];
  const ways = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  
  places.forEach((place) => {
      for(let i=0; i<5; i++){
          for(let j=0; j<5; j++){
              if(place[i][j] === 'P'){
                  for(let k=0; k<4; k++){
                      const [nx, ny] = [i+ways[k][0], j+ways[k][1]];
                      
                      if(nx < 0 || 5 <= nx || ny < 0 || 5 <= ny) continue;
                      if(place[nx][ny] === 'P'){
                          answer.push(0)
                          return;
                      }
                  }
              }
              if(place[i][j] === 'O'){
                  let pCnt = 0;
                  for(let k=0; k<4; k++){
                      const [nx, ny] = [i+ways[k][0], j+ways[k][1]];
                      
                      if(nx < 0 || 5 <= nx || ny < 0 || 5 <= ny) continue;
                      if(place[nx][ny] === 'P') pCnt++;
                  }
                  if(2 <= pCnt){
                      answer.push(0)
                      return;
                  }
              }
          }
      }
      answer.push(1);
  })
  return answer;
}
            