function solution(m, n, board) {
  var ans = 0;
  let arr = board.map(row => row.split(''));
  // 좌, 하, 좌하대각선
  const ways = [[0, 1], [1, 0], [1,1]];
  let block;
  let flag;
  
  const check = (x, y) => {    
      for(let i=0; i<3; i++){
          const [nx, ny] = [x + ways[i][0], y + ways[i][1]];
          if(arr[x][y] !== arr[nx][ny]) return false;
      }
      return true
  }
  
  const sort = (blocks) => {
      for(let col = 0; col <n; col++){
          for(let row=m-1; row >=0 ;row--){
              if(blocks[row][col] === 0) continue;
              
              for(let i=m-1; i>row; i--){
                  if(blocks[i][col] === 0){
                      blocks[i][col] = blocks[row][col];
                      blocks[row][col] = 0;
                      break;
                  }
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
  }while(block.length);
  
  return arr.reduce((acc, curr) => acc + curr.filter(v => !v).length, 0);
}