function solution(board) {
  let ans;
  let N = board.length;
  const ways = [[-1, 0], [1, 0], [0, -1], [0, 1]]; //상, 하, 좌, 우
  let dir = [0, 0, undefined, 0]; // x, y, 이전 방향, 합
  
  const bfs = (board, dir) => {
      const que = [dir];
      while(que.length){
          let [x, y, ndir, sum] = que.shift();
          
          if(board[x][y] < sum && board[x][y] !== 0) continue;
          board[x][y] = sum;
          
          //idx = 0 상, 1 하, 2좌, 3우
          for(let idx=0; idx<4; idx++){
              const nx = x + ways[idx][0];
              const ny = y + ways[idx][1];
              if(nx < 0 || N <= nx || ny < 0 || N <= ny || board[nx][ny] === 1) continue;
              
              if(ndir === undefined || (idx < 2 && ndir < 2) || (2<=idx && 2<=ndir)){
                  que.push([nx, ny, idx, sum+100]);
              }
              else if((2<=idx && ndir<2) || (idx<2 && 2<=ndir)){
                  que.push([nx, ny, idx, sum+600]);
              }
          }
      }
      return board[N-1][N-1];
  }
  ans = bfs(board, dir);

  return ans;
}