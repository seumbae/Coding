function solution(board) {
  let ans;
  let N = board.length;
  const ways = [[-1, 0], [1, 0], [0, -1], [0, 1]]; //상0 하1, 좌2, 우3
  let dir = [0, 0, undefined, 0]; // x, y, 이전 방향, 합
  const dp = Array(N).fill([]).map(() => Array(N).fill([]).map(() => Array(4).fill(0)));

  const bfs = () => {
      const que = [dir];
      while(que.length){
          let [x, y, ndir, sum] = que.shift();
          
          //idx = 0 상, 1 하, 2좌, 3우
          for(let idx=0; idx<4; idx++){
              const nx = x + ways[idx][0];
              const ny = y + ways[idx][1];
              if(nx < 0 || N <= nx || ny < 0 || N <= ny || board[nx][ny] === 1) continue;
              
              let cost = sum + 100;
              if(idx !== ndir && ndir !== undefined) cost += 500;
              
              if(cost < dp[nx][ny][idx] || dp[nx][ny][idx] === 0){
                  dp[nx][ny][idx] = cost;
                  que.push([nx, ny, idx, cost]);
              }
              
          }
      }
  
      return Math.min(...dp[N-1][N-1].filter((it) => it))
  }
  return bfs();
}
