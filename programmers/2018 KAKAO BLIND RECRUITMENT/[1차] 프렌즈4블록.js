function solution(m, n, board) {
  var ans = 0;
  let arr = board.map(row => row.split(''));
  // 좌, 하, 좌하대각선
  const ways = [[0, 1], [1, 0], [1,1]];
  let block;
  let flag;
  
  const check = (x, y) => {
      if(x === 2 && y === 0){
          for(let i=0; i<3; i++){
          const [nx, ny] = [x + ways[i][0], y + ways[i][1]];
          console.log('check',arr[nx][ny], nx, ny)
      }    
      }
      for(let i=0; i<3; i++){
          const [nx, ny] = [x + ways[i][0], y + ways[i][1]];
          if(arr[x][y] !== arr[nx][ny]) return false;
      }
      return true
  }
  
  const sort = (blocks) => {
      for(let i=0; i<n; i++){
          for(let j=m-2; j>=0; j--){
              while(blocks[j][i] !== 0 && blocks[j+1][i] === 0){
                  [blocks[j+1][i], blocks[j][i]] =  [blocks[j][i], blocks[j+1][i]];
                  j++;
              }
          }
      }
  }
  
  const remove = (pos) => {
      pos.forEach(([x, y]) => {
          arr[x][y] = 0;
          ways.forEach(([dx, dy]) => arr[x + dx][y+dy] = 0)
      })
  }
  
  do{
      block = [];
      for(let x=0; x<m-1; x++){
          for(let y=0; y<n-1; y++){
              if(check(x, y) && arr[x][y] !== 0){
                  block.push([x,y]);
              }
          }
      }
      remove(block);
      sort(arr);
      console.log(arr)
  }while(block.length);
  
  return ans;
}